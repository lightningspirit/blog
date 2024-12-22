import { AnnotationHandler, BlockAnnotation, InlineAnnotation, InnerLine, InnerPre, InnerToken, Pre, RawCode, highlight } from "codehike/code"
import { InlineFold } from "./fold.client"
import { SmoothPre } from "./token-transitions.client"

const callout: AnnotationHandler = {
  name: "callout",
  transform: (annotation: InlineAnnotation) => {
    const { name, query, lineNumber, fromColumn, toColumn, data } = annotation
    return {
      name,
      query,
      fromLineNumber: lineNumber,
      toLineNumber: lineNumber,
      data: { ...data, column: (fromColumn + toColumn) / 2 },
    }
  },
  Block: ({ annotation, children }) => {
    const { column } = annotation.data
    return (
      <>
        {children}
        <div
          style={{ minWidth: `${column + 4}ch` }}
          className="w-fit border bg-zinc-800 border-current rounded px-2 ml-6 relative mt-1 whitespace-break-spaces"
        >
          <div
            style={{ left: `${column}ch` }}
            className="absolute border-l border-t border-current w-2 h-2 rotate-45 -translate-y-1/2 -top-[1px] bg-zinc-800"
          />
          {annotation.query}
        </div>
      </>
    )
  },
}

const tokenTransitions: AnnotationHandler = {
  name: "token-transitions",
  PreWithRef: SmoothPre,
  Token: (props) => (
    <InnerToken merge={props} style={{ display: "inline-block" }} />
  ),
}

const link: AnnotationHandler = {
  name: "link",
  Inline: ({ annotation, children }) => {
    const { query } = annotation
    return <a href={query}>{children}</a>
  },
}

const lineNumbers: AnnotationHandler = {
  name: "line-numbers",
  Line: (props) => {
    const width = props.totalLines.toString().length + 1
    return (
      <div className="flex">
        <span
          className="text-right opacity-30 select-none"
          style={{ minWidth: `${width}ch` }}
        >
          {props.lineNumber}
        </span>
        <InnerLine merge={props} className="flex-1 pl-2" />
      </div>
    )
  },
}

const fold: AnnotationHandler = {
  name: "fold",
  Inline: InlineFold,
}

const mark: AnnotationHandler = {
  name: "mark",
  Line: ({ annotation, ...props }) => {
    const color = annotation?.query || "rgb(14 165 233)"
    return (
      <div
        className="flex"
        style={{
          borderLeft: "solid 2px transparent",
          borderLeftColor: annotation && color,
          backgroundColor: annotation && `rgb(from ${color} r g b / 0.15)`,
        }}
      >
        <InnerLine merge={props} className="px-2 flex-1" />
      </div>
    )
  },
  Inline: ({ annotation, children }) => {
    const color = annotation?.query || "rgb(14 165 233)"
    return (
      <span
        className="rounded px-0.5 py-0 -mx-0.5"
        style={{
          outline: `solid 1px rgb(from ${color} r g b / 0.5)`,
          background: `rgb(from ${color} r g b / 0.20)`,
        }}
      >
        {children}
      </span>
    )
  },
}

const diff: AnnotationHandler = {
  name: "diff",
  onlyIfAnnotated: true,
  transform: (annotation: BlockAnnotation) => {
    const color = annotation.query == "-" ? "#f85149" : "#3fb950"
    return [annotation, { ...annotation, name: "mark", query: color }]
  },
  Line: ({ annotation, ...props }) => (
    <div className="flex">
      <div className="min-w-[1ch] box-content opacity-70 pl-2 select-none">
        {annotation?.query}
      </div>
      <InnerLine merge={props} />
    </div>
  ),
}

const wordWrap: AnnotationHandler = {
  name: "word-wrap",
  Pre: (props) => <InnerPre merge={props} className="whitespace-pre-wrap" />,
  Line: (props) => (
    <InnerLine merge={props}>
      <div
        style={{
          textIndent: `${-props.indentation}ch`,
          marginLeft: `${props.indentation}ch`,
        }}
      >
        {props.children}
      </div>
    </InnerLine>
  ),
  Token: (props) => <InnerToken merge={props} style={{ textIndent: 0 }} />,
}

export async function Code({ codeblock }: { codeblock: RawCode }) {
  const highlighted = await highlight(codeblock, "github-dark")

  return (
    <div className="border border-zinc-800 shadow-md min-w-0 rounded overflow-scroll not-prose text-xs">
      {highlighted.meta ? (
        <div className="text-center text-zinc-400 border-b border-zinc-800 py-1 font-mono">
          {highlighted.meta}
        </div>
      ) : null}
      <Pre
        code={highlighted}
        handlers={[lineNumbers, callout, link, mark, fold, diff, wordWrap, tokenTransitions]}
        className="m-0 py-2 bg-zinc-950/80"
      />
    </div>
  )
}

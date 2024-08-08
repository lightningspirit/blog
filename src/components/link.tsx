import NextLink, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

export function Link(props: PropsWithChildren<LinkProps>) {
  const href = typeof props.href === 'string' ? props.href : `${props.href}`

  if (href.startsWith('/')) {
    return (
      <NextLink {...props} href={href}>
        {props.children}
      </NextLink>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} href={href} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} href={href} />
}

import { graphql, PageRendererProps } from "gatsby"
import Img from "gatsby-image"
// tslint:disable-next-line:no-submodule-imports
import "prismjs/themes/prism-tomorrow.css"
import React from "react"
import ReactDisqusComments from "react-disqus-comments"
import LazyLoad from "react-lazy-load"
import styled from "styled-components"
import { Bio } from "../components/bio"
import { Layout } from "../components/layout"
import { FadeLink } from "../components/link"
import { SEO } from "../components/seo"
import { Query, SitePageContext } from "../graphql-types"
import { rhythm, styledScale } from "../utils/typography"

interface Props extends PageRendererProps {
  pageContext: SitePageContext
  data: Query
}

const Metadata = styled.p`
  display: block;
  ${styledScale(-1 / 5)};
  margin-bottom: ${rhythm(1)};
  margin-top: ${rhythm(-1)};
`

const Divider = styled.hr`
  margin-bottom: ${rhythm(1)};
`

const PostNavigator = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`

const ImageHeight = styled.div`
  max-height: 50vh;
  overflow: hidden;
`

const BlogPostTemplate = (props: Props) => {
  const data = props.data!
  const post = data.markdownRemark!
  const excerpt = post.excerpt!
  const frontmatter = post.frontmatter!
  const html = post.html!
  const siteTitle = data.site!.siteMetadata!.title!
  const { previous, next } = props.pageContext

  return (
    <>
      {frontmatter.image && (
        <ImageHeight>
          <Img fluid={frontmatter.image!.childImageSharp.fluid} />
        </ImageHeight>
      )}
      <Layout location={props.location} title={siteTitle}>
        <SEO
          title={frontmatter.title!}
          description={frontmatter.description || excerpt}
        />
        <h1>{post.frontmatter!.title}</h1>
        <Metadata>
          {frontmatter.date} · {post.fields!.readingTime!.text}
        </Metadata>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <Divider />
        {frontmatter.tags && (
          <p>
            <b>Keywords:</b> {frontmatter.tags}
          </p>
        )}
        <Divider />
        <Bio />
        {frontmatter.comments && (
          <LazyLoad offsetTop={400}>
            <ReactDisqusComments
              shortname="https-lightningspirit-github-io"
              identifier={post.id}
              title={frontmatter.title!}
            />
          </LazyLoad>
        )}
        <PostNavigator>
          <li>
            {previous && (
              <FadeLink to={previous.fields!.slug!} rel="prev">
                ← {previous.frontmatter!.title}
              </FadeLink>
            )}
          </li>
          <li>
            {next && (
              <FadeLink to={next.fields!.slug!} rel="next">
                {next.frontmatter!.title} →
              </FadeLink>
            )}
          </li>
        </PostNavigator>
      </Layout>
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        readingTime {
          text
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        comments
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

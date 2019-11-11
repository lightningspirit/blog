/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import React, { ComponentProps, forwardRef, Ref } from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const Content = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2.5)};
`

const GatsbyImage = forwardRef(
  (props: ComponentProps<typeof Image>, ref: Ref<Image>) => (
    <Image {...props} ref={ref} />
  )
)

const Avatar = styled(GatsbyImage)`
  border-radius: 100%;
  margin-bottom: 0;
  margin-right: ${rhythm(1 / 2)};
  min-width: 80px;
  max-height: 80px;
  border: 3px solid #fff;
  box-shadow: 0 1.5px 3px 0 rgba(0, 0, 0, 0.15),
    0 1.5px 3px 0 rgba(0, 0, 0, 0.15);
`

export const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/avatar.jpg/" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata

  return (
    <Content>
      <Avatar
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        imgStyle={{ borderRadius: "100%" }}
      />
      <p>
        Written by <strong>{author}</strong>, Software Developer, Hacker,
        Musician, Astrophysics lover, who lives in sunny{" "}
        <a href="https://duckduckgo.com/?q=lisbon+portugal" target="_blank">
          Lisbon, Portugal
        </a>
        .
        <br />
        Follow me on
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>Twitter</a>
        {` `}
        <a href={`https://github.com/${social.github}`}>Github</a>
        {` `}
        <a href={`https://instagram.com/${social.instagram}`}>Instagram</a>
      </p>
    </Content>
  )
}

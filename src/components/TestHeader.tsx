import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const TestHeader = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            header
          }
        }
      }
    `
  )

  return <header>{data.site.siteMetadata.header}</header>
}

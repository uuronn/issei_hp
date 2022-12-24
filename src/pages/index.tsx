import { graphql, PageProps } from "gatsby"
import React, { Fragment } from "react"
import { TestHeader } from "../components/TestHeader"

const Home: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = (
  props
): JSX.Element => {
  const title = props.data.site?.siteMetadata?.title

  if (!title) return <Fragment />

  console.log(title)
  return (
    <>
      <TestHeader />
      <div>{title}</div>
    </>
  )
}

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Home

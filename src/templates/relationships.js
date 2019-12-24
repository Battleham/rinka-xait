import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String) {
    sanityPost(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      title
      mainImage {
        asset {
          fluid {
            src
          }
        }
      }
    }
  }
`

export default ({ data }) => (
  <div>
    <h1>{data.sanityPost.title}</h1>
  </div>
)

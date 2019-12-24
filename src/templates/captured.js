import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($slug: String) {
    sanityCaptured(slug: { current: { eq: $slug } }) {
      title
      images {
        title
        image {
          asset {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default ({ data }) => (
  <div>
    <h1>{data.sanityCaptured.title}</h1>
  </div>
)

import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query MyQuery {
    allSanityCaptured {
      edges {
        node {
          title
          images {
            title
            image {
              asset {
                fluid(maxWidth: 300) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Captured</h1>
    <p>{data.allSanityCaptured.edges[0].node.title}</p>
    <ul>
      {data.allSanityCaptured.edges[0].node.images.map(({ title, image }) => (
        <li style={{ width: "300px" }}>
          <h2>{title}</h2>
          <Image fluid={image.asset.fluid} alt={title} />
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

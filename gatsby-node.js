/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    {
      allSanityCaptured {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      relationshipPosts: allSanityPost(
        filter: {
          categories: { elemMatch: { title: { eq: "Relationships" } } }
        }
      ) {
        edges {
          node {
            title
            slug {
              current
            }
            categories {
              title
            }
          }
        }
      }
    }
  `)

  const capturedPages = result.data.allSanityCaptured.edges.map(
    ({ node }) => node
  )
  capturedPages.forEach(page => {
    actions.createPage({
      path: page.slug.current,
      component: path.resolve("./src/templates/captured.js"),
      context: {
        //setting this will allow passing this variable into the graphql query on the generated page
        slug: page.slug.current,
      },
    })
  })

  const posts = result.data.relationshipPosts.edges.map(({ node }) => node)

  posts.forEach(post => {
    actions.createPage({
      path: post.slug.current,
      component: path.resolve("./src/templates/relationships.js"),
      context: {
        slug: post.slug.current,
      },
    })
  })
}

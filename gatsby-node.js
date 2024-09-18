const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Fetch all blog posts
  const result = await graphql(`
    query {
      allWpPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  const blogTemplate =path.resolve("src/components/blogs/blogDetail.js");
  // Handle errors
  if (result.errors) {
    throw result.errors
  }

  // Create pages for each blog post
  result.data.allWpPost.edges.forEach(({ node }) => {
    createPage({
      path: `/blogs/${node.slug}`,
      component: blogTemplate,
      context: {
        id: node.id,
        slug:node.slug
      },
    })
  })
}

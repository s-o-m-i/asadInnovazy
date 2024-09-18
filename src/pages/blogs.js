import React from 'react'
import BlogsLandingPage from '../components/blogs/blogsLandingPage'
import { container } from '../styles/styles'
import BlogsList from '../components/blogs/BlogsList'
import '../ui/blogs.css'
import { graphql } from 'gatsby'
const Blogs = ({data}) => {
  return (
    <>
    <div className={`${container}`}>
   <BlogsLandingPage/>
   <BlogsList data={data}/>
    </div>

    </>
  )
}


export const query = graphql`
  {
  allWpPost {
    edges {
      node {
        title
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        content
        date
      }
    }
  }
}
`

export default Blogs
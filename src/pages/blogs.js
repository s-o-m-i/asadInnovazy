// src/pages/index.js
import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { container } from '../styles/styles'
import BlogsLandingPage from '../components/blogs/blogsLandingPage'
import '../ui/blogs.css'

const IndexPage = ({ data }) => {
console.log("----=======++++data",data)
const {allStrapiAuthor,allStrapiCategory
,allStrapiPost
} = data;
console.log("-----------check",allStrapiAuthor.nodes)
const authors = allStrapiAuthor.nodes
const mainArr = [...authors]
console.log("--------=====+++++++mainArr",mainArr)
    return (
        <>
            <div className={`${container}`}>
            <BlogsLandingPage/>
<div className="grid grid-cols-12 mt-32">
{
    data.allStrapiPost.nodes.map(node => (
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
        <Link className="postlink" to={`/${node.slug}`}>
            <div className="blog_card mt-8">
                  <div className="blog_card-header">
                    <img
                      
                      src={`${node.cover}`} 
                    />
                  </div>
                  <div className="blog_card-body background-glass text-white">
                    <span className="blog_tag blog_tag-teal text-white">{"title"}</span>
                    <span className="blog_tag blog_tag-teal my-4 text-white">{"date"}</span>
                    <h4>
                     {node.title}
                    </h4>
                    <p>{node.description}</p>
                    {/* <div dangerouslySetInnerHTML={{ __html:" excerpt "}} className='overflow-hidden py-5'/> */}
                    <div className="blog_user">
                      <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
                      <div className="blog_user-info text-white">
                        <h5>July Dec</h5>
                        <small>2h ago</small>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
                </div>
    ))
}

   
</div>
        
       
       
       </div>
       </>
        )
}

export const query = graphql`
  query {
    allStrapiPost(sort: {date: DESC}) {
      nodes {
        cover
        date(formatString: "MMM D, YYYY")
        id
        slug
        title
      }
    }
    allStrapiAuthor {
      nodes {
        avatar
        name
      }
    }
    allStrapiCategory {
      nodes {
        name
        slug
      }
    }
  }
`

export const Head = () => <title>Home Page - Strapi Gatsby Blog</title>

export default IndexPage
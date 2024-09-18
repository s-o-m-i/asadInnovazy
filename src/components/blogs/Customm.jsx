import React, { useEffect, useState } from 'react'
import { fetchPosts } from '../../api/api'
import { Link, graphql } from 'gatsby'; // Import graphql from gatsby
const Customg = ({data}) => {
    // const { title = "Default Title", id = 0 } = pageContext || {};
    const [blogs,setBlogs] = useState([])
    // const posts = data.allWpPost.edges;
    console.log("===========",data)
//     useEffect(()=>{
//         const posts = async () => {
//      const res =     await   fetchPosts()
// console.log('res posts------',res.data)
// setBlogs(res.data)
//         }
//         posts()
//     },[])

  return (
    <div className='mt-32'>
<div className="grid grid-cols-12">
    

    

        {blogs.length > 0 && blogs.map((e,i)=>{
         const featuredMedia = e._embedded?.["wp:featuredmedia"]?.[0]?.['source_url'] || '';
        return(



            <div className="col-span-4">
        <Link to={`/blogs/first-post`}>
        {/* ${e.slug} */}
    <div className="blog_card">
    <div className="blog_card-header">
      {/* <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="rover" /> */}
      {featuredMedia ? (
            <img src={featuredMedia} alt="Featured media" />
          ) : (
            <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg" alt="Fallback image" />
          )}
    </div>
    <div className="blog_card-body">
      <span className="blog_tag blog_tag-teal">{e.title.rendered}</span>
      <h4>
        Why is the Tesla Cybertruck designed the way it
        is?
      </h4>
      {/* <p>
        An exploration into the truck's polarising design
      </p> */}
 <div dangerouslySetInnerHTML={{ __html: e.excerpt.rendered }} className=' overflow-hidden py-5'/>
      <div className="blog_user">
        <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
        <div className="blog_user-info">
          <h5>July Dec</h5>
          <small>2h ago</small>
        </div>
      </div>
    </div>
  </div>
  </Link>
  </div>
        )
    }
        )}
  </div>
  </div>
  )
}






export default Customg



















// const path = require('path')

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   // Fetch all blog posts
//   const result = await graphql(`
//     query {
//       allWpPost {
//         edges {
//           node {
//             id
//             slug
//           }
//         }
//       }
//     }
//   `)

//   // Handle errors
//   if (result.errors) {
//     throw result.errors
//   }

//   // Create pages for each blog post
//   result.data.allWpPost.edges.forEach(({ node }) => {
//     createPage({
//       path: `/blogs/${node.slug}`,
//       component: path.resolve("src/components/blogs/blogDetail.js"),
//       context: {
//         id: node.id,
//       },
//     })
//   })
// }

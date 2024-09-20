import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { container } from '../styles/styles'
import Markdown from 'markdown-to-jsx'
const BlogPost = ({ data }) => {
    console.log("somidata---",data)
    return (


        <div className='text-white'>
        <div className="blog-hero-image h-[70vh] relative">
          <div className="bg-[rgba(0,0,0,0.7)] absolute w-full h-full top-0 left-0 z-10 flex justify-center items-center">
            <h1 className="text-4xl text-white">
              {data.strapiPost.title}
            </h1>
          </div>
          <img 
            src={data.strapiPost.cover}
            alt={data.strapiPost.title || 'Fallback image'}
            className='w-full h-full object-cover z-0'
          />
        </div>
        <div className={`${container} mt-24 text-white`}>
          <h1 className="text-4xl text-white">
     
            {data.strapiPost.description}
          </h1>
{/* <p>{data.strapiPost.content}</p> */}
          {/* <div className='text-[16px] mt-8' dangerouslySetInnerHTML={{ __html: data.strapiPost.content }} /> */}
          {/* <div className='text-[16px] mt-8' dangerouslySetInnerHTML={{ __html: data.strapiPost.content }} /> */}
          <Markdown
  options={{
    overrides: {
      h1: {
        component: 'h1',
        props: {
          className: 'text-4xl font-bold my-4', // Tailwind classes for H1
        },
      },
      h2: {
        component: 'h2',
        props: {
          className: 'text-3xl font-bold my-4', // Tailwind classes for H2
        },
      },
      h3: {
        component: 'h3',
        props: {
          className: 'text-2xl font-bold my-4', // Tailwind classes for H3
        },
      },
      p: {
        component: 'p',
        props: {
          className: 'text-lg my-2', // Tailwind classes for paragraphs
        },
      },
    },
  }}
>
  {data.strapiPost.content}
</Markdown>
        </div>
      </div>
            // <>
            // <img class="postcover" src={data.strapiPost.cover} alt={`Cover for ${data.strapiPost.title}`} />
            // <p class="postdate">{data.strapiPost.date}</p>
            // {/* <img class="postavatar" src={data.strapiPost.author.avatar} alt={`Avatar for${data.strapiPost.author.name}`} /> */}
            // {/* <p class="postauthor">Written by {data.strapiPost.author.name}</p> */}
            // <p class="postcategory"><Link to={`/${"data.strapiPost.category.slug"}`}>Category: {"data.strapiPost.category.name"}</Link></p>
            // {/* <div class="postcontent" dangerouslySetInnerHTML={{ __html: data.strapiPost.content.data.childMarkdownRemark.html }} /> */}
            // </>
    )
}

export const query = graphql`
query ($id: String) {
    strapiPost(id: {eq: $id}) {
  
    
      
        
    
    
      cover
      date(formatString: "MMMM D, YYYY")
      description
      slug
      title
      content
    }
  }
`

export const Head = ({ data }) => <title>{data.strapiPost.title} - Strapi Gatsby Blog Site</title>

export default BlogPost
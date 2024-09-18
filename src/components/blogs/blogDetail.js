import React from 'react'
import { graphql } from 'gatsby'
import { container } from '../../styles/styles'

const BlogDetail = ({ data }) => {
  const { wpPost } = data
  const { title, content, featuredImage } = wpPost
  const imageUrl = featuredImage?.node?.sourceUrl || 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg'; // Fallback image URL

  return (
    <div className='text-white'>
      <div className="blog-hero-image h-[70vh] relative">
        <div className="bg-[rgba(0,0,0,0.7)] absolute w-full h-full top-0 left-0 z-10 flex justify-center items-center">
          <h1 className="text-4xl text-white">
            {title}
          </h1>
        </div>
        <img 
          src={imageUrl}
          alt={title || 'Fallback image'}
          className='w-full h-full object-cover z-0'
        />
      </div>
      <div className={`${container} mt-24 text-white`}>
        <h1 className="text-4xl text-white">
          Blog Detail:
        </h1>
        <div className='text-[16px] mt-8' dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`

export default BlogDetail

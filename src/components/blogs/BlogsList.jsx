import React from 'react';
import { Link } from 'gatsby'; // No need to import `graphql` if not using it directly

const BlogsList = ({ data }) => {
  const posts = data?.allWpPost?.edges || [];
  console.log("===========", posts);

  return (
    <div className='mt-32'>
      <div className="grid grid-cols-12">
        {posts.length > 0 && posts.map(({ node }, i) => {
          const { title, excerpt, slug, featuredImage,date } = node;
          const imageUrl = featuredImage?.node.sourceUrl || 'https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg'; // Fallback image URL
console.log("-------",slug)
          return (
            <div className="col-span-4" key={i}>
              <Link to={`/blogs/${slug}`}>
                <div className="blog_card">
                  <div className="blog_card-header">
                    <img
                      src={imageUrl}
                      alt={title || "Fallback image"}
                    />
                  </div>
                  <div className="blog_card-body">
                    <span className="blog_tag blog_tag-teal">{title}</span>
                    <span className="blog_tag blog_tag-teal my-4">{date}</span>
                    <h4>
                      Why is the Tesla Cybertruck designed the way it is?
                    </h4>
                    <div dangerouslySetInnerHTML={{ __html: excerpt }} className='overflow-hidden py-5'/>
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
          );
        })}
      </div>
    </div>
  );
};

export default BlogsList;

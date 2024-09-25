import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { container } from '../styles/styles';
import BlogsLandingPage from '../components/blogs/blogsLandingPage';
import '../ui/blogs.css';

const fetchDeployedBlogs = async () => {
  try {
    const res = await fetch("https://peaceful-darling-f0da2a1db5.strapiapp.com/api/posts/");
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error in deployed blogs", error);
  }
};

const IndexPage = ({ data }) => {
  const [deployedBlogs, setDeployedBlogs] = React.useState(null);

  // Use useEffect to fetch data on mount
  React.useEffect(() => {
    const fetchData = async () => {
      const blogs = await fetchDeployedBlogs();
      setDeployedBlogs(blogs?.data || []); // Make sure to access 'data' safely
      console.log("Fetched deployed blogs:", blogs?.data);
    };

    fetchData();
  }, []);

  console.log("Fetched data from GraphQL:", data);

  const { allStrapiPost } = data;

  return (
    <>
      <div className={`${container}`}>
        <BlogsLandingPage />

        <div className="grid grid-cols-12 mt-32">
          {/* Map over GraphQL posts */}
          {allStrapiPost.nodes.map((node) => (
            <div key={node.id} className="col-span-12 lg:col-span-4 xl:col-span-3">
              <Link className="postlink" to={`/${node.slug}`}>
                <div className="blog_card mt-8">
                  <div className="blog_card-header">
                    <img src={node.cover} alt={node.title} />
                  </div>
                  <div className="blog_card-body background-glass text-white">
                    <span className="blog_tag blog_tag-teal text-white">{node.title}</span>
                    <span className="blog_tag blog_tag-teal my-4 text-white">{node.date}</span>
                    <h4>{node.title}</h4>
                    <p>{node.description}</p>
                    <div className="blog_user">
                      <img
                        src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                        alt="user"
                      />
                      <div className="blog_user-info text-white">
                        <h5>July Dec</h5>
                        <small>2h ago</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          {/* Display deployed blogs fetched from the API */}
          {deployedBlogs &&
            deployedBlogs.map((blog) => (
              <div key={blog.id} className="col-span-12 lg:col-span-4 xl:col-span-3">
                <Link className="postlink" to={`/${blog.slug}`}>
                  <div className="blog_card mt-8">
                    <div className="blog_card-header">
                      <img src={blog.cover} alt={blog.title} />
                    </div>
                    <div className="blog_card-body background-glass text-white">
                      <h4>{blog.title}</h4>
                      <p>{blog.description}</p>
                      <div className="blog_user">
                        <img
                          src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo"
                          alt="user"
                        />
                        <div className="blog_user-info text-white">
                          <h5>{blog.author}</h5>
                          <small>{blog.published_at}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export const query = graphql`
  query {
    allStrapiPost(sort: { date: DESC }) {
      nodes {
        cover
        date(formatString: "MMM D, YYYY")
        id
        slug
        title
        description
      }
    }
  }
`;

export const Head = () => <title>Home Page - Strapi Gatsby Blog</title>;

export default IndexPage;

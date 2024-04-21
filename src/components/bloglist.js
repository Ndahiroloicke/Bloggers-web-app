import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Bloglist = ({ title, blogs, handledelete }) => {
  return (
    <div className="bloglist">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-title" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
//how the button for deleting the blog works is by taking the id of
//that blog the button is in and filtering it out of the array by using filter
// method and then the blog list is updated by using usestate of the new filtered array of blogs
export default Bloglist;

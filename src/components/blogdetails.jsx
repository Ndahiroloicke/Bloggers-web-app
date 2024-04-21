import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "../usefetch";

const BlogDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const {
    data: blog,
    ispending,
    ping,
  } = useFetch("http://localhost:8000/blogs/" + id);
  const handledelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="details">
      {ispending && <div className="la2">Loading...</div>}
      {ping && <div>{ping}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div className="bod">{blog.body}</div>
          <button onClick={handledelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

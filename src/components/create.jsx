import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Create = () => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [author, setauthor] = useState("Mario");
  const [ispending, setispending] = useState(false);
  const history = useHistory();
  const handlesub = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setispending(true);
    fetch("http://localhost:7000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setispending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handlesub}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setbody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setauthor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!ispending && <button>Add blog</button>}
        {ispending && <button disabled>Adding blog..</button>}
      </form>
    </div>
  );
};

export default Create;

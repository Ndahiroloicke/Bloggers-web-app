import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Notfound = () => {
  return (
    <div className="not">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">Back to home page</Link>
    </div>
  );
};

export default Notfound;

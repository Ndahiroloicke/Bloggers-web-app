import Bloglist from "./bloglist";
import useFetch from "../usefetch";

const Home = () => {
  const { data, ispending, ping } = useFetch("http://localhost:7000/blogs");

  //the empty array is used to run the function only the first render
  return (
    <div className="Home">
      {ping && <div>Oops couldn't connect to the server</div>}
      {ispending && <div className="loading"> Loading... </div>}
      {data && <Bloglist blogs={data} title="All Blogs" />}
    </div>
  );
};
export default Home;

import Navbar from "./components/navbar";
import Home from "./components/home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import Create from "./components/create";
import BlogDetails from "./components/blogdetails";
import Notfound from "./components/notfound";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="page-contents">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <Notfound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

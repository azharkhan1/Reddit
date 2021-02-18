import React from "react";
import "./App.css";
// import axios from 'axios'
import axios from "axios";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

// import Login from './components/login/login'
// import Signup from './components/signup/signup'
import Dashboard from "./components/dashboard/dashboard";

// import oneee from "./images/1.jpg"
// import twooo from "./images/3.PNG"
// import threee from "./images/4.PNG"
// import fourr from "./images/5.PNG"

function App() {
  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`).then((res) => {
      const newPosts = res.data.data.children.map((obj) => obj.data);

      setPosts(newPosts);
      console.log(newPosts);
    });
  }, []);

  const [posts, setPosts] = React.useState([]);
  // const [head, setHead] = React.useState([]);

  return (
    <div>
      {/* <nav>
        <div>
          <div>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      </nav> */}
      <Dashboard />
   
   
    </div>
  );
}

export default App;

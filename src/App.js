import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
// import HomeV1 from "./pages/Home/index-v1";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Project from "./pages/Project";
import "./App.css";
import "./colors/colors.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/projects/:project" component={Project}></Route>
      </Switch>
    </div>
  );
}

export default App;

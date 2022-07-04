import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import "./colors/colors.css";
import "./App.css";
import About from "./pages/About";
import Project from "./pages/Project";

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

import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import "./colors/colors.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
      </Switch>
    </div>
  );
}

export default App;

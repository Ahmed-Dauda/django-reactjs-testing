import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";

import Home from "./Home";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>testing api2</h1>
         <Home/>
        <HomePage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);

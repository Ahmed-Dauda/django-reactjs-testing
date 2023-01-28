import React, { Component } from "react";
import { render } from "react-dom";
import {

  Routes,
  Route,
  Link,
} from "react-router-dom";
// import your route components too
import HomePage from "./HomePage";
import About from "./About";
import Footer from "./Footer";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
      <div>
        <h1>testing api222333</h1>
         <About/>
       
        < HomePage/>
<br></br>
        < Footer/>
      </div>
   
    </>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);

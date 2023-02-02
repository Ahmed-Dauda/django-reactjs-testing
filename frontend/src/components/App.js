import React, { Component } from "react";
import { render } from "react-dom";


import { BrowserRouter as Router,Route, Redirect,Link,Switch } from "react-router-dom";
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
      <Router>
      
      <Link to="/">Home Page</Link><br></br>
      <Link to="/About">About Page</Link><br></br>
      <Link to="/Footer">Footer page</Link><br></br>
      {/* <Link to="/Footer">Footer</Link><br></br> */}

          <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/footer" component={Footer}></Route>
            <Route path="/About" component={About}></Route>
          </Switch>      
      </Router>
      
      </div>
   
    </>
    );
  }
}

const appDiv = document.getElementById("app");

render(<App />, appDiv);

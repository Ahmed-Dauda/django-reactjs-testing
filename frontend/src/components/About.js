import React, { Component } from "react";
import { render } from "react-dom";

import HomePage from "./HomePage";
import { Link } from 'react-router-dom';
import {

  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function About() {
    return (
      <div>
        About rr33
        <Link to='/about'>Go to Aboutpage</Link>
      </div>
    );
  }
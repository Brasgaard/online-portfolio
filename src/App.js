import React, {Component} from 'react';
import './App.css';
import {  } from 'semantic-ui-react'
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import AboutMe from './AboutMe';
import Nav from "./Nav";
import Work from "./Work";

class App extends Component {
  render() {
  return (
          <React.Fragment>
            <Nav/>
            <Router>
              <Work path="/Work"/>
              <AboutMe path="/AboutMe"/>
            </Router>
            <Work/>
          </React.Fragment>
  );
}
}

export default App;
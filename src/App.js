import React, {Component} from 'react';
import './App.css';
import {  } from 'semantic-ui-react'
import { render } from "react-dom";
import {Router, Link, navigate} from "@reach/router";
import AboutMe from './AboutMe';
import Nav from "./Nav";
import Work from "./Work";
import Footer from "./Footer";

class App extends Component {

    componentDidMount() {
        navigate('/Work')
    }

  render() {
  return (
          <React.Fragment>
            <Nav/>
                <Router>
                  <Work path="/Work"/>
                  <AboutMe path="/AboutMe"/>
                </Router>
            <Footer/>
          </React.Fragment>
  );
}
}

export default App;
import React, {Component} from 'react';
import './App.css';
import {  } from 'semantic-ui-react';
import {Router, navigate} from "@reach/router";
import AboutMe from './AboutMe';
import Nav from "./Nav";
import Work from "./Work";
import Footer from "./Footer";
import ProjectNjordex from "./ProjectNjordex";
import ProjectDinadi from "./ProjectDinadi";
import ProjectAmtos from "./ProjectAmtos";
import ProjectVama from "./ProjectVama";
import {ScrollToTop} from "./ScrollToTop";

class App extends Component {

    componentDidMount() {
        navigate('/Work')
    }

  render() {
  return (
          <React.Fragment>
            <Nav/>
                <Router primary={false}>
                    <ScrollToTop path="/">
                      <Work path="/Work"/>
                      <AboutMe path="/AboutMe"/>
                      <ProjectNjordex path="/ProjectNjordex"/>
                      <ProjectDinadi path="/ProjectDinadi"/>
                      <ProjectAmtos path="/ProjectAmtos"/>
                      <ProjectVama path="/ProjectVama"/>
                    </ScrollToTop>
                </Router>
            <Footer/>
          </React.Fragment>
  );
}
}

export default App;
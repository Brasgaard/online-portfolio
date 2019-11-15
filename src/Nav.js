import React, {Component} from 'react';
import { Link } from "@reach/router";
import {Grid, Responsive} from 'semantic-ui-react';
import resume from './components/Assets/portfolio-resume.pdf';

class Nav extends Component {
    render() {
        return(
            <React.Fragment>
                <Responsive {...Responsive.onlyComputer}>
                    <Grid stackable columns='equal' style={{margin: '2rem' }}>
                        <Grid.Column textAlign='center'>
                            <Link className="Nav-link" to="/Work">Work</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <a className="Nav-link" href={resume} rel="noopener noreferrer" target="_blank">Resume</a>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Link className="Nav-logo" to="/Work">BRASGAARD</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Link className="Nav-link" to="/AboutMe">About</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <a className="Nav-link" href="mailto:alexander@brasgaard.com" target="_top">Let's Talk!</a>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyTablet}>
                    <Grid stackable columns='equal' style={{margin: '2rem' }}>
                        <Grid.Column textAlign='center'>
                            <Link className="Nav-link" to="/Work">Work</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Link className="Nav-link" to="/Work">Resume</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Link className="Nav-logo" to="/Work">BRASGAARD</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Link className="Nav-link" to="/AboutMe">About</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <a className="Nav-link" href="mailto:alexander@brasgaard.com" target="_top">Let's Talk!</a>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Grid stackable columns='equal' style={{margin: '2rem' }}>
                        <Grid.Column textAlign='center'>
                            <Link className="Nav-logo" to="/Work">BRASGAARD</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center' style={{wordSpacing: '30px' }}>
                            <Link className="Nav-link" to="/Work">Work</Link> <Link className="Nav-link" to="/Work">Resume</Link> <Link className="Nav-link" to="/AboutMe">About</Link> <a className="Nav-link" style={{ wordSpacing: '0px' }} href="mailto:alexander@brasgaard.com" target="_top">Let's Talk!</a>
                        </Grid.Column>

                    </Grid>
                </Responsive>
            </React.Fragment>
        );
    }
}

export default Nav;
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
                            <Link to="/Work">Work</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <a style={{ color: '#2f89fc' }} href={resume} rel="noopener noreferrer" target="_blank">Resume</a>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Link style={{fontSize: '1.5em', letterSpacing: '3px', fontWeight: 'bold', color: '#000' }} to="/Work">BRASGAARD</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Link to="/AboutMe">About</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <a style={{ color: '#2f89fc' }} href="mailto:alexander@brasgaard.com" target="_top">Let's Talk!</a>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyTablet}>
                    <Grid stackable columns='equal' style={{margin: '2rem' }}>
                        <Grid.Column textAlign='center'>
                            <Link to="/Work">Work</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Link to="/Work">Resume</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Link style={{fontSize: '1.5em', letterSpacing: '3px', fontWeight: 'bold', color: '#000' }} to="/Work">BRASGAARD</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <Link to="/AboutMe">About</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center'>
                            <a style={{ color: '#2f89fc' }} href="mailto:alexander@brasgaard.com" target="_top">Let's Talk!</a>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Grid stackable columns='equal' style={{margin: '2rem' }}>
                        <Grid.Column textAlign='center'>
                            <Link style={{fontSize: '1.5em', letterSpacing: '3px', fontWeight: 'bold', color: '#000' }} to="/Work">BRASGAARD</Link>
                        </Grid.Column>
                        <Grid.Column textAlign='center' style={{wordSpacing: '30px' }}>
                            <Link to="/Work">Work</Link> <Link to="/Work">Resume</Link> <Link to="/AboutMe">About</Link> <a style={{ color: '#2f89fc', wordSpacing: '0px' }} href="mailto:alexander@brasgaard.com" target="_top">Let's Talk!</a>
                        </Grid.Column>

                    </Grid>
                </Responsive>
            </React.Fragment>
        );
    }
}

export default Nav;
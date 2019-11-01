import React, {Component} from 'react';
import './App.css';
import njordex from './components/Assets/project-njordex.jpg';
import dinadi from './components/Assets/project-dinadi.jpg';
import vama from './components/Assets/project-vama.jpg';
import amtos from './components/Assets/project-amtos.jpg';
import { Header, Grid, Image, Responsive } from 'semantic-ui-react';
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

class Work extends Component {
    render() {
        return (
            <React.Fragment>
                <Responsive {...Responsive.onlyComputer}>
                    <Grid centered columns={2} style={{margin: '5rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3.4em' }}>Hi, I’m Alexander <span role="img" aria-label="waving-hand">👋🏼</span> — a frontend
                                developer & webdesigner based in
                                Aarhus Denmark.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyTablet}>
                    <Grid centered columns={1} style={{margin: '3rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3em' }}>Hi, I’m Alexander <span role="img" aria-label="waving-hand">👋🏼</span> — a frontend
                                developer & webdesigner based in
                                Aarhus Denmark.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Grid centered columns={1} style={{margin: '1rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '1.4em' }}>Hi, I’m Alexander <span role="img" aria-label="waving-hand">👋🏼</span> — a frontend
                                developer & webdesigner based in
                                Aarhus Denmark.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>

                <Grid columns={2} container stackable>
                    <Grid.Column>
                        <Link to="/ProjectNjordex"><Image src={njordex} fluid/></Link>
                    </Grid.Column>

                    <Grid.Column>
                        <Link to="/ProjectDinadi"><Image src={dinadi} fluid/></Link>
                    </Grid.Column>

                    <Grid.Column>
                        <Image src={vama} fluid/>
                    </Grid.Column>

                    <Grid.Column>
                        <Link to="/ProjectAmtos"><Image src={amtos} fluid/></Link>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Work;
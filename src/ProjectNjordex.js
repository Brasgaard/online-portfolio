import React, {Component} from 'react';
import './App.css';
import {Header, Grid, Responsive} from 'semantic-ui-react'
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

class ProjectNjordex extends Component {
    render() {
        return (
            <React.Fragment>
                <Responsive {...Responsive.onlyComputer}>
                    <Grid centered columns={2} style={{margin: '5rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3.4em' }}>Project: Njordex<br/>
                                Your new cryptocurrency platform.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyTablet}>
                    <Grid centered columns={1} style={{margin: '3rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3em' }}>Project: Njordex<br/>
                                Your new cryptocurrency platform.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Grid centered columns={1} style={{margin: '1rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '1.3em' }}>Project: Njordex<br/>
                                Your new cryptocurrency platform.<br/>
                                Nice to meet you!</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
            </React.Fragment>
        );
    }
}

export default ProjectNjordex;
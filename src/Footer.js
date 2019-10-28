import React, {Component} from 'react';
import './App.css';
import { Header, Grid, Icon } from 'semantic-ui-react'
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid centered columns={1} style={{marginTop: '5rem' }}>
                    <Grid.Column textAlign='center'>
                        <Header as='h5' style={{marginBottom: '5px' }}>© Brasgaard.com 2019</Header>
                        <Header.Subheader icon> <Icon name='linkedin' size='big'/><Icon name='instagram' size='big'/></Header.Subheader>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Footer;
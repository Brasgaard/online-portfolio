import React, {Component} from 'react';
import './App.css';
import {Header, Grid, Responsive, Image, List, Divider} from 'semantic-ui-react'
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import njordexHeader from "./components/Assets/project-njordex-header.jpg";
import njordexLandingpage from "./components/Assets/project-njordex-landingpage.jpg";
import njordexDashboard from "./components/Assets/project-njordex-dashboard.jpg";

class ProjectNjordex extends Component {
    render() {
        return (
            <React.Fragment>
                <Responsive {...Responsive.onlyComputer}>
                    <Grid centered columns={1} style={{margin: '5rem' }}>
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
                                Your new cryptocurrency platform.
                            </Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={njordexHeader} fluid/>
                    </Grid.Column>
                </Grid>

                <Grid columns={4} container stackable centered>
                    <Grid.Column>
                        <Header as='h2' textAlign='left'>
                            Background
                        </Header>
                        <p>
                            Njordex is a cryptocurrency platform where you can buy, sell, send and store your crypto assets. The goal is to make the experience with cryptocurrency user-friendly and simple for everybody.
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2' textAlign='left'>
                            My role
                        </Header>
                        <List bulleted>
                            <List.Item>User research</List.Item>
                            <List.Item>Wireframing</List.Item>
                            <List.Item>Prototyping</List.Item>
                            <List.Item>UI / UX design</List.Item>
                            <List.Item>Web design</List.Item>
                            <List.Item>Frontend development</List.Item>
                        </List>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered>
                    <Grid.Column>
                        <Divider />
                        <Header as='h2' textAlign='left' >
                            Landing page
                        </Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor quam nec ligula scelerisque, et molestie ipsum porta. Curabitur et ante et lectus cursus cursus vitae vitae lectus. Mauris eu felis non mi facilisis gravida ut in nunc. Mauris viverra fermentum massa. Nunc nec diam nibh. Nunc eget fringilla odio, in condimentum turpis. Aliquam ac quam lacus.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={njordexLandingpage} fluid/>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered>
                    <Grid.Column>
                        <Divider />
                        <Header as='h2' textAlign='left' >
                            Dashboard
                        </Header>
                        <p>
                            Proin porttitor odio eu odio sagittis, ac vehicula risus vehicula. Aenean maximus libero non orci aliquet tincidunt. Nam aliquam eleifend ligula, commodo tincidunt eros congue ac. Proin pellentesque non felis non semper. Ut at nulla nisl. Sed maximus libero turpis, ac dignissim mauris scelerisque sit amet. Vestibulum urna tellus, vehicula vitae justo blandit, fringilla placerat neque.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={njordexDashboard} fluid/>
                    </Grid.Column>
                </Grid>


            </React.Fragment>
        );
    }
}

export default ProjectNjordex;
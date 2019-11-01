import React, {Component} from 'react';
import './App.css';
import {Header, Grid, Responsive, Image, List, Divider} from 'semantic-ui-react'
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import amtosHeader from "./components/Assets/project-amtos-header.jpg";
import amtosDevices1 from "./components/Assets/project-amtos-devices1.jpg";
import amtosDevices from "./components/Assets/project-amtos-devices.jpg";
import amtosWordpress from "./components/Assets/project-amtos-wordpress.jpg";
import ThanksForReading from "./ThanksForReading";

class ProjectAmtos extends Component {
    render() {
        return (
            <React.Fragment>
                <Responsive {...Responsive.onlyComputer}>
                    <Grid centered columns={1} style={{margin: '5rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3.4em' }}>Project: Amtos<br/>
                                A local carpenter with focus on sustainability.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyTablet}>
                    <Grid centered columns={1} style={{margin: '3rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3em' }}>Project: Amtos<br/>
                                A local carpenter with focus on sustainability.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Grid centered columns={1} style={{margin: '1rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '1.3em' }}>Project: Amtos<br/>
                                A local carpenter with focus on sustainability.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={amtosHeader} fluid/>
                    </Grid.Column>
                </Grid>

                <Grid columns={4} container stackable centered>
                    <Grid.Column>
                        <Header as='h2' textAlign='left'>
                            Background
                        </Header>
                        <p>
                            Dinadi is a social business established in Kathmandu, Nepal in April, 2016. Their vision is to create fair employment opportunities for Nepali women and produce sustainable, timeless and high-quality knitwear.<br/>
                            Website: <a style={{ color: '#2f89fc' }} href="https://www.dinadi.com/" target="_blank" rel="noopener noreferrer">Dinadi.com</a>
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2' textAlign='left'>
                            My role
                        </Header>
                        <List bulleted>
                            <List.Item>Redesign of website</List.Item>
                            <List.Item>Wireframing</List.Item>
                            <List.Item>Prototyping</List.Item>
                            <List.Item>User research</List.Item>
                            <List.Item>Frontend development through WordPress</List.Item>
                            <List.Item>Optimization</List.Item>
                        </List>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered>
                    <Grid.Column>
                        <Header as='h2' textAlign='left' >
                            About the project
                        </Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor quam nec ligula scelerisque, et molestie ipsum porta. Curabitur et ante et lectus cursus cursus vitae vitae lectus. Mauris eu felis non mi facilisis gravida ut in nunc. Mauris viverra fermentum massa. Nunc nec diam nibh. Nunc eget fringilla odio, in condimentum turpis. Aliquam ac quam lacus.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered>
                    <Grid.Column>
                        <Divider />
                        <Header as='h2' textAlign='left' >
                            The adjustments
                        </Header>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempor quam nec ligula scelerisque, et molestie ipsum porta. Curabitur et ante et lectus cursus cursus vitae vitae lectus. Mauris eu felis non mi facilisis gravida ut in nunc. Mauris viverra fermentum massa. Nunc nec diam nibh. Nunc eget fringilla odio, in condimentum turpis. Aliquam ac quam lacus.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={amtosDevices} fluid/>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered className="Header-project">
                    <Grid.Column>
                        <Header as='h2' textAlign='left' >
                            Optimization
                        </Header>
                        <p>
                            Proin porttitor odio eu odio sagittis, ac vehicula risus vehicula. Aenean maximus libero non orci aliquet tincidunt. Nam aliquam eleifend ligula, commodo tincidunt eros congue ac. Proin pellentesque non felis non semper. Ut at nulla nisl. Sed maximus libero turpis, ac dignissim mauris scelerisque sit amet. Vestibulum urna tellus, vehicula vitae justo blandit, fringilla placerat neque.
                        </p>
                        <p>
                            This was one of the interactive prototype we used for feedback made in Adobe XD. It was mainly for the layout of the store & products. Together with the link for the prototype, we had added some questions we would like answered to be able to further improve the design. Try navigating to a product page. Check it out <a style={{ color: '#2f89fc' }} href="https://xd.adobe.com/view/02cfed4b-cca7-4eb8-77a9-545ebbb85828-74fe/" target="_blank" rel="noopener noreferrer">here</a> and the code is "Dinadi123".
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={amtosDevices1} fluid/>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered className="Header-project">
                    <Grid.Column>
                        <Header as='h2' textAlign='left' >
                            WordPress
                        </Header>
                        <p>
                            Proin porttitor odio eu odio sagittis, ac vehicula risus vehicula. Aenean maximus libero non orci aliquet tincidunt. Nam aliquam eleifend ligula, commodo tincidunt eros congue ac. Proin pellentesque non felis non semper. Ut at nulla nisl. Sed maximus libero turpis, ac dignissim mauris scelerisque sit amet. Vestibulum urna tellus, vehicula vitae justo blandit, fringilla placerat neque.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={amtosWordpress} fluid/>
                    </Grid.Column>
                </Grid>
                <ThanksForReading/>
            </React.Fragment>
        );
    }
}

export default ProjectAmtos;
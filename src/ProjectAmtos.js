import React, {Component} from 'react';
import './App.css';
import {Header, Grid, Responsive, Image, List, Divider} from 'semantic-ui-react';
import FadeIn from 'react-fade-in';
import amtosHeader from "./components/Assets/project-amtos-header.jpg";
import amtosDevices1 from "./components/Assets/project-amtos-devices1.jpg";
import amtosDevices from "./components/Assets/project-amtos-devices.jpg";
import amtosWordpress from "./components/Assets/project-amtos-wordpress.jpg";
import ThanksForReading from "./ThanksForReading";

class ProjectAmtos extends Component {
    render() {
        return (
            <React.Fragment>
                <FadeIn>
                <Responsive {...Responsive.onlyComputer}>
                    <Grid centered columns={1} style={{margin: '5rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3.4em' }}>AM Tømrer og Snedker<br/>
                                A local carpenter with focus on sustainability.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyTablet}>
                    <Grid centered columns={1} style={{margin: '3rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3em' }}>AM Tømrer og Snedker<br/>
                                A local carpenter with focus on sustainability.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Grid centered columns={1} style={{margin: '1rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '1.3em' }}>AM Tømrer og Snedker<br/>
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
                            AM Tømrer og Snedker is a versatile new company with a variety of services within the carpentry field. They primarily operate in Jutland but provide services throughout Denmark. They have become very popular since their beginning for their exceptional quality work, focus on sustainability and energy-efficient solutions.<br/>Website: <a href="https://www.amtos.dk/" target="_blank" rel="noopener noreferrer">Amtos.dk</a>
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2' textAlign='left'>
                            My role
                        </Header>
                        <List bulleted>
                            <List.Item>New ideas for content</List.Item>
                            <List.Item>Wireframing</List.Item>
                            <List.Item>Prototyping</List.Item>
                            <List.Item>Frontend development through WordPress</List.Item>
                            <List.Item>Optimization</List.Item>
                            <List.Item>SEO</List.Item>
                        </List>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered>
                    <Grid.Column>
                        <Header as='h2' textAlign='left' >
                            About the project
                        </Header>
                        <p>
                            This project is a simple and informative website for potential customers. The setup is modest with an about section, contact section, and previous projects. It mustn't take a long time to locate information if we were to retain lower bounce rates.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered>
                    <Grid.Column>
                        <Divider />
                        <Header as='h2' textAlign='left' >
                            The flaws
                        </Header>
                        <p>
                            When asked to help update their website, I started by analyzing their entire website for defects. It didn't take long to discover errors like sluggish loading, incorrect semantics, no use of an essential SEO, etc. These were well-known issues amongst new customers. It is crucial to solve these problems for a more satisfying user experience and SEO. By resolving these crucial issues, AM Tømrer og Snedker could result in an improved customer flow.
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
                            The adjustments
                        </Header>
                        <p>
                            The most prominent problem for their website was loading speed. Primarily, deleting, optimizing and re-sizing images solved the issue. Through the optimization, the images retained quality with minimal file space taken. We fixed the semantics and meta-descriptions across the website too. Additional content such as 'Projekter', 'Hvem er vi', testimonials, and social media links was incorporated to support further usability.
                        </p>
                        <p>
                            All of these changes, with a few more, improved the overall effectiveness of the site. According to Google PageSpeed Insight, the site speed increased 166% on mobile and 134% on desktop.
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
                            WordPress was utilized to develop this website for numerous reasons. When they have future projects or need to update information, content can effortlessly be modified. Additionally, I installed several plugins, such as Smush, to automatically assist with content. These allow them to retain a faster, more enjoyable website.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={amtosWordpress} fluid/>
                    </Grid.Column>
                </Grid>
                <ThanksForReading/>
                </FadeIn>
            </React.Fragment>
        );
    }
}

export default ProjectAmtos;
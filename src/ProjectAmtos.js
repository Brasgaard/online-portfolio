import React, {Component} from 'react';
import './App.css';
import {Header, Grid, Responsive, Image, List, Divider} from 'semantic-ui-react';
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
                            AM Tømrer og Snedker is a newly started company that does all kind of work within the carpenter field. They operate across Denmark, but mostly in Jutland near Aarhus. They have become very popular since their beginning, because of their great quality work, focus on sustainability and energy-efficient solutions.<br/>
                            Website: <a style={{ color: '#2f89fc' }} href="https://www.amtos.dk/" target="_blank" rel="noopener noreferrer">Amtos.dk</a>
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
                            This project is a simple static informational website for new potential customers to find information. The website has a simple setup with quick information about them, their previous work and how to contact them. It is important that it doesn’t take long time to find the information the user is looking for to prevent possible higher bounce rate.
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
                            When I got asked if I could help with their website and wishes for it, I started by analyzing their entire website for flaws. It didn’t take me long to find errors like slow loading, wrong semantics, no use of important SEO etc. Well-known issues for persons who don’t know about them. These issues are very important to solve for better user experience and SEO. Which in the end could result in new customers for AM Tømrer og Snedker.
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
                            The biggest problem for their website was loading speed. This was fixed by optimizing every image on their website, re-sizing them to their specific size and deleting unnecessary ones. This makes sure that the image file became as small as possible, while still remaining good quality. Semantics across the website was fixed as well together with meta-descriptions on every page. We also added some more content to their site such as “Projekter”, “Hvem er vi”, testimonials and social media links.
                        </p>
                        <p>
                            Together all these changes plus some more resulted in a great improvement overall. Their pagespeed score from Google Pagespeed Insight went up by 166% on mobile and 134% on desktop.
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
                            The website was developed in WordPress for multiple reasons. They can easily change the content themselves for future projects or if want new information. I also installed different plug-ins that will help them automatically like ‘Smush’ to make sure their new images stay optimized. This is help them to keep their website fast and enjoyable for visitors.
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
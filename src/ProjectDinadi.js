import React, {Component} from 'react';
import './App.css';
import {Header, Grid, Responsive, Image, List, Divider} from 'semantic-ui-react';
import FadeIn from 'react-fade-in';
import dinadiHeader from "./components/Assets/project-dinadi-header.jpg";
import dinadiRedesign from "./components/Assets/project-dinadi-redesign.jpg";
import dinadiMockups from "./components/Assets/project-dinadi-mockups.jpg";
import dinadiWordpress from "./components/Assets/project-dinadi-wordpress.jpg";
import ThanksForReading from "./ThanksForReading";

class ProjectDinadi extends Component {
    render() {
        return (
            <React.Fragment>
                <FadeIn>
                <Responsive {...Responsive.onlyComputer}>
                    <Grid centered columns={1} style={{margin: '5rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3.4em' }}>Dinadi<br/>
                                Taking slow fashion quite literally.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyTablet}>
                    <Grid centered columns={1} style={{margin: '3rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3em' }}>Dinadi<br/>
                                Taking slow fashion quite literally.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Grid centered columns={1} style={{margin: '1rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '1.3em' }}>Dinadi<br/>
                                Taking slow fashion quite literally.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={dinadiHeader} fluid/>
                    </Grid.Column>
                </Grid>

                <Grid columns={4} container stackable centered className="Grid-margin-top">
                    <Grid.Column>
                        <Header as='h2' textAlign='left'>
                            Background
                        </Header>
                        <p>
                            Founded in 2016, Dinadi is a Nepali social business that strives for sustainability and offers fair employment opportunities. Hand-crafted articles of clothing are not only made by the women of Nepal but are high-quality and timeless. Using merino and yak wool allows for sustainability due to its properties. However, it doesn't stop there - the unused materials are re-cultivated.<br/>Website: <a href="https://www.dinadi.com/" target="_blank" rel="noopener noreferrer">Dinadi.com</a>
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

                <Grid columns={2} container stackable centered className="Grid-margin-top">
                    <Grid.Column>
                        <Header as='h2' textAlign='left'>
                            About the project
                        </Header>
                        <p>
                            Being a part of my Multimedia Design education, this project was executed during my internship at Dinadi in 2018. Dinadi sought after a student to help redesign and improve their branding, Google presence, and social media. Starting at Dinadi, I knew little of WordPress. After investing the time at Dinadi with the CMS, I have become confident and is now more fluid. My recommendation from Dinadi can be found on my <a href="https://www.linkedin.com/in/alexander-brasgaard-van-straaten-31666314a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered className="Grid-margin-bottom">
                    <Grid.Column>
                        <Divider />
                        <Header as='h2' textAlign='left'>
                            The redesign
                        </Header>
                        <p>
                            The redesigning of Dinadi was especially interesting. Everyone had such brilliant ideas - knowing what they wanted. However, I expressed the importance of primarily focusing on end-users. Afterward, we directed our attention to what the consumer would like on the website. From our engagements in user-centralized testing and research, other employees realized the gravity of this method.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={dinadiRedesign} fluid/>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered className="Header-project">
                    <Grid.Column>
                        <Header as='h2' textAlign='left' >
                            User feedback
                        </Header>
                        <p>
                            We developed numerous interactive prototypes in Adobe XD during the redesign and branding period. One of the prototypes can be found <a href="https://xd.adobe.com/view/02cfed4b-cca7-4eb8-77a9-545ebbb85828-74fe/" target="_blank" rel="noopener noreferrer">here</a> with the code 'Dinadi123'. Primarily, this one was for store layouts and items. We also incorporated several questions for the testers to answer to further gain knowledge which helped improve the design.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={dinadiMockups} fluid/>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered className="Header-project">
                    <Grid.Column>
                        <Header as='h2' textAlign='left' >
                            The plugins
                        </Header>
                        <p>
                            Dinadi offers high-quality products and is why utilizing plugins is relevant. Each plugin is unique and plays an essential role, both individually and collectively. The image beneath the text showcases some of the plugins used. Using Google Analytics allows us to collect valuable data and understand users. From here, the data can help improve the website when needed. Dinadi has many customers and is, consequently, very important to retain contact. This connection is preserved by sending updates/new releases, etc. with Mailchimp. We opted for Smush, an image compressor, to keep the website and online store's page at an optimal speed. While image compressors generally sometimes ruin the picture, Smush is exceptionally good in quality conservation.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={dinadiWordpress} fluid/>
                    </Grid.Column>
                </Grid>
                <ThanksForReading/>
                </FadeIn>
            </React.Fragment>
        );
    }
}

export default ProjectDinadi;
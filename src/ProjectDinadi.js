import React, {Component} from 'react';
import './App.css';
import {Header, Grid, Responsive, Image, List, Divider} from 'semantic-ui-react';
import dinadiHeader from "./components/Assets/project-dinadi-header.jpg";
import dinadiRedesign from "./components/Assets/project-dinadi-redesign.jpg";
import dinadiMockups from "./components/Assets/project-dinadi-mockups.jpg";
import dinadiWordpress from "./components/Assets/project-dinadi-wordpress.jpg";
import ThanksForReading from "./ThanksForReading";

class ProjectDinadi extends Component {
    render() {
        return (
            <React.Fragment>
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
                            This project was made during my internship at Dinadi in 2018 and was a part of my multimedia design education. Dinadi looked for a student that could help them redesign and further improve their branding and online presence on Google and social media. When I joined Dinadi I didn’t know much about WordPress, but after staying with them and having to solve this task I’ve become very confidence within the CMS. My recommendation from Dinadi can be found on my <a style={{ color: '#2f89fc' }} href="https://www.linkedin.com/in/alexander-brasgaard-van-straaten-31666314a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered>
                    <Grid.Column>
                        <Divider />
                        <Header as='h2' textAlign='left' >
                            The redesign
                        </Header>
                        <p>
                            The whole process of redesigning Dinadi was very interesting. The founders and co-workers of the company had a lot of great thoughts and ideas for what they would like. Many of the things were amazing ideas, but I had to educate that we had to focus more on users. What they would like, how they reacted to different things and how they interpret the website. It opened some new doors and they quickly saw the benefits of how powerful user research and user testing was.                        </p>
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
                            We made multiple interactive prototypes in Adobe XD during our redesign and branding period. One of them can be found through the link <a style={{ color: '#2f89fc' }} href="https://xd.adobe.com/view/02cfed4b-cca7-4eb8-77a9-545ebbb85828-74fe/" target="_blank" rel="noopener noreferrer">here</a> with the code “Dinadi123”. This specific prototype was mainly for the layout of the store & products. Together with the link to the prototype, we had added some questions we would like answered to be able to further improve the design.
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
                            Dinadi is an online shop for amazing quality products and therefore different plugins plays important roles. The image under this text showcases some of them, but not all. These are all important in their own way and combined. It is important to get data and understand the users through Google Analytics. The data from here can help further improve the website later on. They have a lot of customers and it is important to keep contact if them and hold them updated on new releases etc. which we received with Mailchimp. To keep the website and online store’s page speed optimal we have installed ‘Smush’ to help keep their image sizes as small as possible while still keeping them good quality.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={dinadiWordpress} fluid/>
                    </Grid.Column>
                </Grid>
                <ThanksForReading/>
            </React.Fragment>
        );
    }
}

export default ProjectDinadi;
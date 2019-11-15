import React, {Component} from 'react';
import './App.css';
import {Header, Grid, Responsive, Image, List, Divider} from 'semantic-ui-react';
import FadeIn from 'react-fade-in';
import vamaHeader from "./components/Assets/project-vama-header.jpg";
import vamaDevices1 from "./components/Assets/project-vama-devices1.jpg";
import vamaDevices from "./components/Assets/project-vama-devices.jpg";
import vamaApps from "./components/Assets/project-vama-apps.jpg";
import ThanksForReading from "./ThanksForReading";

class ProjectVama extends Component {
    render() {
        return (
            <React.Fragment>
                <FadeIn>
                <Responsive {...Responsive.onlyComputer}>
                    <Grid centered columns={1} style={{margin: '5rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3.4em' }}>VAMA<br/>
                                Environmental renting.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyTablet}>
                    <Grid centered columns={1} style={{margin: '3rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3em' }}>VAMA<br/>
                                Environmental renting.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Grid centered columns={1} style={{margin: '1rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '1.3em' }}>VAMA<br/>
                                Environmental renting.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={vamaHeader} fluid/>
                    </Grid.Column>
                </Grid>

                <Grid columns={4} container stackable centered className="Grid-margin-top">
                    <Grid.Column>
                        <Header as='h2' textAlign='left'>
                            Background
                        </Header>
                        <p>
                            VAMA was a two-week school project which incorporated everything we learned from three classes that semester, Backend Development, Database, and Interface Design. We decided to design VAMA to be a service where people could select from a variety of clothing options for various occasions.<br/>
                            Website: <a href="https://github.com/valerijaa/Clothing-rental-website" target="_blank" rel="noopener noreferrer">Github</a> (Not online)
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2' textAlign='left'>
                            My role
                        </Header>
                        <List bulleted>
                            <List.Item>User research</List.Item>
                            <List.Item>Journey map</List.Item>
                            <List.Item>Wireframing</List.Item>
                            <List.Item>Prototyping</List.Item>
                            <List.Item>Frontend development</List.Item>
                        </List>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered className="Grid-margin-top">
                    <Grid.Column>
                        <Header as='h2' textAlign='left'>
                            About the project
                        </Header>
                        <p>
                            We had to choose a meaningful topic to showcase. Therefore, we opted for environmental preservation as our topic. The purpose was to build a web-based application that helped users rent clothes for special occasions in Denmark. The application was designed to promote awareness in sustainability, waste reduction, and allow users to explore and rent articles for specific events
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered className="Grid-margin-bottom">
                    <Grid.Column>
                        <Divider />
                        <Header as='h2' textAlign='left'>
                            The research
                        </Header>
                        <p>
                            To understand the topic and potential customers within the market, we used desk-research to collect information for the interviews. Understanding both is essential to producing appropriate content for the users. Without these, it could present difficulties in reaching the target audience in the desired way. To gather all this information, we carried out research on the clothing industry and its pollution, our potential target audience and a competitor analysis. After we collected the information, we made a persona to develop an empathy map and user scenarios/journey map.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={vamaDevices} fluid/>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered className="Header-project">
                    <Grid.Column>
                        <Header as='h2' textAlign='left' >
                            The design
                        </Header>
                        <p>
                            Based on the information collected from the research, we began brainstorming designs and content. We started with wireframes for structuring the content, navigating through the pages, and usability. Wireframing is quick and easy to create an overview of an ideal look. After determining the wireframes, I produced high-fidelity mockups that mirrored the design. These gave us a sense of how all the pages should look with colors, fonts, etc. From here, we designed a prototype in Adobe XD that was utilized to test the target audience. From testing, we gathered information about how the users navigated, what they focused on, and the critiques of our design decisions. This feedback prompted us to refine the prototype and then incorporate it into the final version. Check it out <a href="https://xd.adobe.com/view/7c55274b-1a06-48b9-71a8-987983b317c3-0a64/" target="_blank" rel="noopener noreferrer">here</a>.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={vamaDevices1} fluid/>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered className="Header-project">
                    <Grid.Column>
                        <Header as='h2' textAlign='left' >
                            Tools and technology
                        </Header>
                        <p>
                            VAMA was the first project of the semester involving all three courses. We, therefore, had to combine the various tools and technologies learned. Besides several models and theories, we employed Adobe XD for prototyping and Visual Studio with Entity Framework for backend and frontend development. We implemented Microsoft SQL Server Management Studio for our databases. Since we went with the Entity Framework in Visual Studio, we also opted for the database-first approach. For deployment and code sharing we went with GitHub.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={vamaApps} fluid/>
                    </Grid.Column>
                </Grid>
                <ThanksForReading/>
                </FadeIn>
            </React.Fragment>
        );
    }
}

export default ProjectVama;
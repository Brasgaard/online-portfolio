import React, {Component} from 'react';
import './App.css';
import {Header, Grid, Responsive, Image, List, Divider} from 'semantic-ui-react';
import vamaHeader from "./components/Assets/project-vama-header.jpg";
import vamaDevices1 from "./components/Assets/project-vama-devices1.jpg";
import vamaDevices from "./components/Assets/project-vama-devices.jpg";
import vamaApps from "./components/Assets/project-vama-apps.jpg";
import ThanksForReading from "./ThanksForReading";

class ProjectVama extends Component {
    render() {
        return (
            <React.Fragment>
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

                <Grid columns={4} container stackable centered>
                    <Grid.Column>
                        <Header as='h2' textAlign='left'>
                            Background
                        </Header>
                        <p>
                            VAMA was a small two-week school project that was a combination of our three courses that semester. Backend development, database and interface design. We chose to make VAMA: A clothing renting website where you can rent fine clothing for special occasions.<br/>
                            Website: <a style={{ color: '#2f89fc' }} href="https://github.com/valerijaa/Clothing-rental-website" target="_blank" rel="noopener noreferrer">Github</a> (Not online)
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

                <Grid columns={2} container stackable centered>
                    <Grid.Column>
                        <Header as='h2' textAlign='left' >
                            About the project
                        </Header>
                        <p>
                            We had to choose a specific topic we wanted to showcase in our project that was meaningful. VAMA’s topic was saving the environment. The purpose of this project was to build a web-based application that could help the users to rent clothes for special occasions in Denmark. The application would promote the waste reduction and sustainable awareness, and allowing the users to explore a large variety of clothes and rent the items for a specific period.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered>
                    <Grid.Column>
                        <Divider />
                        <Header as='h2' textAlign='left' >
                            The research
                        </Header>
                        <p>
                            To understand the topic and the potential customers within this marked, we needed to do desk-research and collect information from interviews. It is important to get an understanding of both to make fitting content for the user. Without we are not sure that we reach our target audience the way we wish to. To gather all this information, we did research on the clothing industry and its pollution, our potential target audience, competitor analysis, made a persona so that we could make an empathy map and user scenarios / journey map.
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
                            Based on the information gather from the research, we would start the brainstorming about our design and content. We started out with wireframes for structuring the content, navigation throughout the pages and usability. Wireframing is quick and easy to create an overview of how it should look. After deciding on the wireframes, I create some few high-fidelity mockups reflecting that design. These gave us the idea of how all the pages should look with colors, fonts etc. From here I create a prototype in Adobe XD that we could use for user testing on people in our target audience. In the testing we gathered information about how the user navigated, put focus or maybe were questioning some design decision. We took that feedback to further improve our prototype, which would be used in our final live version.  Check it out <a style={{ color: '#2f89fc' }} href="https://xd.adobe.com/view/7c55274b-1a06-48b9-71a8-987983b317c3-0a64/" target="_blank" rel="noopener noreferrer">here</a>.
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
                            This was our first semester project with all three courses mixed. We therefore had to combine the different tools and technology that we have learned so far. Beside different models and theories we used Adobe XD for prototyping. Visual Studio with Entity Framework for backend and frontend development. And for our database we used Microsoft SQL Server Management Studio. Since we went with the Entity Framework in Visual Studio, we also chose to use the database first approach.  For deployment and code sharing we went with GitHub.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={vamaApps} fluid/>
                    </Grid.Column>
                </Grid>
                <ThanksForReading/>
            </React.Fragment>
        );
    }
}

export default ProjectVama;
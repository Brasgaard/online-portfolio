import React, {Component} from 'react';
import './App.css';
import {Header, Grid, Responsive, Image, List, Divider} from 'semantic-ui-react';
import njordexHeader from "./components/Assets/project-njordex-header.jpg";
import njordexLandingpage from "./components/Assets/project-njordex-landingpage.jpg";
import njordexDashboard from "./components/Assets/project-njordex-dashboard.jpg";
import njordexMobile from "./components/Assets/project-njordex-mobile.jpg";
import ThanksForReading from "./ThanksForReading";

class ProjectNjordex extends Component {
    render() {
        return (
            <React.Fragment>
                <Responsive {...Responsive.onlyComputer}>
                    <Grid centered columns={1} style={{margin: '5rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3.4em' }}>Njordex<br/>
                                Your new cryptocurrency platform.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyTablet}>
                    <Grid centered columns={1} style={{margin: '3rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3em' }}>Njordex<br/>
                                Your new cryptocurrency platform.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Grid centered columns={1} style={{margin: '1rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '1.3em' }}>Njordex<br/>
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
                            Njordex is a cryptocurrency platform where you can buy, sell, send and store your crypto assets. The goal is to make the experience with cryptocurrency user-friendly and simple for everybody.<br/>
                            Website (still under development): <a style={{ color: '#2f89fc' }} href="https://www.njordex.dk/" target="_blank" rel="noopener noreferrer">Njordex.dk</a>

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
                        <Header as='h2' textAlign='left' >
                            About the project
                        </Header>
                        <p>
                            Njordex started as a side project besides school together with three friends. We were all interested in the idea of cryptocurrencies and the blockchain technology. As we got deeper into the whole building of Njordex and gained even more knowledge on the subject, we decided in 2018 to register as a company. We want to bring our idea of a user-friendly cryptocurrency platform to life and bring awareness around the community. Njordex is currently still under development, but we hope to soon launch our first version.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered>
                    <Grid.Column>
                        <Divider />
                        <Header as='h2' textAlign='left' >
                            Landing page
                        </Header>
                        <p>
                            On Njordex’s landing page you quickly get introduced to a short sentence which states what we offer on our platform. It’s important to catch new visitors’ attention and try convincing them to continue reading about what we provide. With the sentence we have a very visible call-to-action button for new sign-ups together with an image of our dashboard. These three things combined quickly introduces to what we stand for, easy sign-ups and hopefully leads the visitors’ to further read on about our platform.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={njordexLandingpage} fluid/>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered className="Header-project">
                    <Grid.Column>
                        <Header as='h2' textAlign='left' >
                            Dashboard
                        </Header>
                        <p>
                            Our dashboard is divided into four different segments: Activities, portfolio, three CTA buttons to the ‘buy’, ‘sell’ and ‘send’ pages and a live chart of the current price of a selected cryptocurrency. This gives a fast and simple overview of your portfolio, recently made activities and the most used features with CTA buttons for quick access. The chart can provide different settings depending on how accurate you would like to see the price for a giving date/time. We only wanted to bring out the most necessary features on the dashboard and make sure the user didn’t have to scroll to see certain information. For more information it is easy to find the relevant page in the navigation.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={njordexDashboard} fluid/>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered className="Header-project">
                    <Grid.Column>
                        <Header as='h2' textAlign='left' >
                            Responsive design
                        </Header>
                        <p>
                            As stated on the landing page, cryptocurrency should be available on-the-go. Therefore, we also knew from the beginning we wanted to keep it mobile friendly for the users. This gives them the opportunity to make trades with others, buy, sell or send their cryptocurrency anytime and anywhere. It gives a lot of freedom and flexibility for everybody, no matter what the need of the user is.
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={1} container stackable centered>
                    <Grid.Column>
                        <Image src={njordexMobile} fluid/>
                    </Grid.Column>
                </Grid>
                <ThanksForReading/>
            </React.Fragment>
        );
    }
}

export default ProjectNjordex;
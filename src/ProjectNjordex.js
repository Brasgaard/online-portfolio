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
                            Njordex began as three friends discussing an idea in school. We were so engrossed in cryptocurrencies and blockchain technology. Delving deeper into the subject, we only became increasingly enthused for a more profound understanding. In 2018 Njordex was established.<br/>Website (still under development): <a style={{ color: '#2f89fc' }} href="https://www.njordex.dk/" target="_blank" rel="noopener noreferrer">Njordex.dk</a>
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
                            Founded in Aarhus Njordex is a fast and smoothly operating platform for organizing and trading cryptocurrency assets. Njordex aims to offer a more impactful and insightful, user-friendly experience for all traders. Njordex also aims to raise positive awareness around cryptocurrency in Denmark. Although Njordex is still under development, the first version is expected to launch reasonably soon.
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
                            On Njordex’s landing page, a sentence introduces the user to what the platform has to offer. Prospective users need to be captivated enough to continue reading about the offers. Therefore, we set out to develop an engaging, fresh landing page. Underneath the sentence, we have an unmistakable call-to-action button and dashboard preview designated for signing up. These three things submerse the user into what we strive for and have to offer.
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
                            The dashboard is organized into four segments: activities, portfolio, three CTA buttons labeled ’buy’, ’sell’ and ’send’, and a live price chart of a selected cryptocurrency. The live price chart has a wide range of price accuracy settings for specific dates/times. Having the dashboard organized this way allows for swift and accessible overviews of the platform and your assets. We wanted to include the most necessary features to ensure users weren’t struggling to navigate the platform. However, it is still easy to navigate the platform when searching for other information.
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
                            As stated on the landing page, cryptocurrency should be available on-the-go. Therefore, from the beginning, we knew it was crucial to have a mobile-friendly interface. By having a mobile-friendly interface, the user is given smooth access to a wide array of features, such as selling or sending cryptocurrencies. This grants freedom and flexibility, no matter the situation.
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
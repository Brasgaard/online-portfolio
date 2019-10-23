import React, {Component} from 'react';
import './App.css';
import { Header, Grid, Image, Responsive, Divider } from 'semantic-ui-react'
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import myself from "./components/Assets/alexander-brasgaard.jpg";

class AboutMe extends Component {
    render() {
        return (
            <React.Fragment>
                <Responsive {...Responsive.onlyComputer}>
                    <Grid centered columns={2} style={{margin: '5rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3.4em' }}>I’m just a down-to-earth guy who
                                wants to create awesome stuff.<br/>
                                Nice to meet you!</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyTablet}>
                    <Grid centered columns={1} style={{margin: '3rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3em' }}>I’m just a down-to-earth guy who
                                wants to create awesome stuff.<br/>
                                Nice to meet you!</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Grid centered columns={1} style={{margin: '1rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '1.3em' }}>I’m just a down-to-earth guy who
                                wants to create awesome stuff.<br/>
                                Nice to meet you!</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>

                <Grid columns={2} container stackable centered>
                    <Grid.Column>
                        <Image src={myself} fluid/>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered>
                    <Grid.Column>
                        <Header as='h2' textAlign='left' >
                            About me
                        </Header>
                        <p>
                            Hello! I’m Alexander Brasgaard, a frontend developer and webdesigner focused on structured, readable code and beautiful solutions. I collaborate with passionate people and companies to create user-friendly web solutions that will result in happy customers and end users.
                        </p>
                        <p>
                            I believe in working directly with the end-user from the beginning, to create solutions that are genuinely desirable, feasible and viable for the business and the users. In practice, this means a lot of experiments, prototypes and different kind of interviews.
                        </p>
                        <p>
                            I’m currently available for new projects, <a style={{ color: '#2f89fc' }} href="mailto:alexander@brasgaard.com" target="_top">so send me a message</a> and let’s discuss how I can help you. I’m open to work both on-site in Aarhus, remotely or if the right opportunity shows itself move to another country.
                        </p>
                        <p>
                            You can follow me on <a style={{ color: '#2f89fc' }} href="https://www.linkedin.com/in/alexander-brasgaard-van-straaten-31666314a/" target="_blank">LinkedIn</a> or reach out via email - <a style={{ color: '#2f89fc' }} href="mailto:alexander@brasgaard.com" target="_top">alexander@brasgaard.com</a>
                        </p>

                        <Divider />

                        <Header as='h2' textAlign='left'>
                            Companies I've worked with
                        </Header>
                        <p>
                            Grundfos, Bjerringbro / MakeInfluence, Copenhagen / Dinadi, Kathmandu / Aarhus
                            Science Museum, Aarhus C / nordnordnord, Aarhus C / AM Tømrer & Snedker,
                            Aarhus C / Løve’s Bog- og Vincafé, Aarhus C and more.
                        </p>

                        <Divider />
                    </Grid.Column>
                </Grid>
                <Grid columns={4} container stackable centered>
                    <Grid.Column>
                        <Header as='h2' textAlign='left'>
                            Work experience
                        </Header>
                        <p>
                            2014 – 2016<br/>
                            Moment A/S<br/>
                            Temporary warehouse employee<br/>
                            <br/><br/>
                            2016 – 2017<br/>
                            Lemvigh-Müller A/S<br/>
                            Service employee<br/>
                            <br/><br/>
                            2017 - Present<br/>
                            Njordex ApS<br/>
                            Co-founder & frontend developer<br/>
                            <br/><br/>
                            2018 - Present<br/>
                            Dinadi<br/>
                            Freelance frontend developer<br/>
                        </p>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h2' textAlign='left'>
                            Education
                        </Header>
                        <p>
                            2011 – 2014<br/>
                            IBC International Business College<br/>
                            Marketing and psychology<br/>
                            <br/><br/>
                            2017 - 2019<br/>
                            Business Academy Aarhus<br/>
                            Multimedia design<br/>
                            <br/><br/>
                            2019 - Present<br/>
                            Business Academy Aarhus<br/>
                            Bachelor in web development<br/>
                        </p>
                    </Grid.Column>
                </Grid>

                <Grid columns={2} container stackable centered>
                    <Grid.Column>
                        <Divider />
                        <Header as='h2' textAlign='left'>
                            Hobbies
                        </Header>
                        <p>
                            Technology / Fashion / Music / Entrepreneurship / Cryptocurrency / E-sport
                            / Movies / Traveling / Food and much more.
                        </p>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        );
    }
}

export default AboutMe;
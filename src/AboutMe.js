import React, {Component} from 'react';
import './App.css';
import { Header, Grid, Image, Responsive, Divider } from 'semantic-ui-react';
import myself from "./components/Assets/alexander-brasgaard.jpg";

class AboutMe extends Component {
    render() {
        return (
            <React.Fragment>
                <Responsive {...Responsive.onlyComputer}>
                    <Grid centered columns={2} style={{margin: '5rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3.4em' }}>Nice to meet you!<br/>
                            I’m simply a down-to-earth person who strives to bring thoughtful ideas to the table.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyTablet}>
                    <Grid centered columns={1} style={{margin: '3rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '3em' }}>Nice to meet you!<br/>
                                I’m simply a down-to-earth person who strives to bring thoughtful ideas to the table.</Header>
                        </Grid.Column>
                    </Grid>
                </Responsive>
                <Responsive {...Responsive.onlyMobile}>
                    <Grid centered columns={1} style={{margin: '1rem' }}>
                        <Grid.Column>
                            <Header as='h1' textAlign='center' style={{fontSize: '1.3em' }}>Nice to meet you!<br/>
                                I’m simply a down-to-earth person who strives to bring thoughtful ideas to the table.</Header>
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
                            Hello, I’m Alexander Brasgaard!<br/> As a frontend developer and webdesigner, I have focused on structured and readable code with beautiful solutions. I collaborate with passionate individuals and companies alike to produce user-friendly web solutions, resulting in satisfied consumers.
                        </p>
                        <p>
                            I believe working directly with the consumer from the beginning is of great importance, as it allows for more accurate, sought-after solutions. It is necessary to conduct experiments, develop prototypes and convene in several interviews to achieve this.
                        </p>
                        <p>
                            I am available for new projects, <a style={{ color: '#2f89fc' }} href="mailto:alexander@brasgaard.com" target="_top">so send me a message</a>. I would love to discuss how I can accommodate you. I’m open to working on-site in Aarhus or remotely and even in another country if apposite.
                        </p>
                        <p>
                            You can follow me on <a style={{ color: '#2f89fc' }} href="https://www.linkedin.com/in/alexander-brasgaard-van-straaten-31666314a/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or reach out via email - <a style={{ color: '#2f89fc' }} href="mailto:alexander@brasgaard.com" target="_top">alexander@brasgaard.com</a>
                        </p>

                        <Divider />

                        <Header as='h2' textAlign='left'>
                            Competences
                        </Header>
                        <p>
                            HTML / CSS / SASS / JavaScript / React / SEO / Prototyping / Adobe Creative Cloud / WordPress / Drupal 8 / Umbraco 8
                        </p>

                        <Divider />

                        <Header as='h2' textAlign='left'>
                            Companies I've worked with
                        </Header>
                        <p>
                            Grundfos, Bjerringbro / MakeInfluence, Copenhagen / Dinadi, Kathmandu / Aarhus
                            Science Museum, Aarhus C / nordnordnord, Aarhus C / AM Tømrer & Snedker,
                            Aarhus C / Løve’s Bog- og Vincafé, Aarhus C / etc.
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
                            / Movies / Traveling / Food / etc.
                        </p>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        );
    }
}

export default AboutMe;
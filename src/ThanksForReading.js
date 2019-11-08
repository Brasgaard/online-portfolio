import React, {Component} from 'react';
import './App.css';
import { Header, Grid } from 'semantic-ui-react';
import { Link } from "@reach/router";

class ThanksForReading extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid columns={2} container stackable centered className="Header-project">
                    <Grid.Column>
                        <Header as='h2' textAlign='center' >
                            Thanks for reading!<br/>
                            <Link to="/Work">See more projects</Link>
                        </Header>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        );
    }
}

export default ThanksForReading;
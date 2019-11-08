import React, {Component} from 'react';
import './App.css';
import { Header, Grid} from 'semantic-ui-react';


class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid centered columns={1} style={{marginTop: '5rem' }}>
                    <Grid.Column textAlign='center'>
                        <Header as='h5' style={{marginBottom: '5px' }}>© Brasgaard.com 2019</Header>
                    </Grid.Column>
                </Grid>
            </React.Fragment>
        );
    }
}
export default Footer;
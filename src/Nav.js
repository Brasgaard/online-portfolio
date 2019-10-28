import React, {Component} from 'react';
import { Router, Link } from "@reach/router";
import { Menu } from 'semantic-ui-react';

class Nav extends Component {
    render() {
        return(
            <React.Fragment>
                <Menu stackable text borderless size='large' style={{margin: '2rem' }}>
                    <Menu.Item name='work'>
                        <Link to="/Work">Work</Link>
                    </Menu.Item>

                    <Menu.Item name='Resume'>
                        <Link to="/NjordexProject">Resume</Link>
                    </Menu.Item>

                    <Menu.Menu position='right'>
                        <Menu.Item name='about'>
                            <Link to="/AboutMe">About</Link>
                        </Menu.Item>

                        <Menu.Item>
                            <a style={{ color: '#2f89fc' }} href="mailto:alexander@brasgaard.com" target="_top">Let's Talk!</a>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </React.Fragment>

        );
    }
}

export default Nav;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

import './Footer.css';

class Footer extends Component {
    render () {
        return(
            <Navbar>
                <Container>
                    <NavLink to='/'>Privacy policy</NavLink>
                </Container>
            </Navbar>
        );
    }
}

export default Footer;

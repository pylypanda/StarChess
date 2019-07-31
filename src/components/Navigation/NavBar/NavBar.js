import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import logo from "../../../img/Logo.png"
import './NavBar.css';

class NavBar extends Component {
  render(){
    return (
        <Navbar className="d-flex flex-row" bg="dark" variant="dark" fixed="top" expand="md">
          <Container>
            <NavLink to="/">
              <img src={logo} height="40px" alt="Logo" />
            </NavLink>
            <Navbar.Toggle aria-controls="resp" />
            <Navbar.Collapse id="resp" className="justify-content-end">
              <NavLink to="/" className="mx-3 py-2">
                Home
              </NavLink>
              <NavLink to="/openings" className="mx-3 py-2">
                Openings
              </NavLink>
              <NavLink to="/puzzles" className="mx-3 py-2">
                Puzzles
              </NavLink>
              <NavLink to="/news" className="mx-3 py-2">
                News
              </NavLink>
              <NavLink to="/blog" className="mx-3 py-2">
                Blog
              </NavLink>
              <NavLink to="/contacts" className="mx-3 py-2">
                Contacts
              </NavLink>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );    
  }
}

export default NavBar;

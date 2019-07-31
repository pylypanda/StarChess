import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row, Collapse, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece, faChessBoard, faChessKing, faBook, faRobot } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';

import './Sections.css';

class Sections extends Component {
    render () {
        return (
                <Navbar className='flex-column site-sections align-items-start'>
                    <NavLink to='/learn' activeClassName='is-active'>
                        <FontAwesomeIcon icon={faChessBoard} />
                        <span>How to play</span>
                    </NavLink>
                    <NavLink to='/openings' activeClassName='is-active'>
                        <FontAwesomeIcon icon={faChessKing} />
                        <span>Openings</span>
                    </NavLink>
                    <NavLink to='/puzzles' activeClassName='is-active'>
                        <FontAwesomeIcon icon={faPuzzlePiece} />
                        <span>Puzzles</span>
                    </NavLink>
                    <NavLink to='/news' activeClassName='is-active'>
                        <FontAwesomeIcon icon={faNewspaper} />
                        <span>News</span>
                    </NavLink>
                    <NavLink activeClassName='is-active'>
                        <FontAwesomeIcon icon={faArrowAltCircleUp} />
                        <span>Top-100</span>
                    </NavLink>  
                    <NavLink activeClassName='is-active'>
                        <FontAwesomeIcon icon={faBook} />
                        <span>Chess books</span>
                    </NavLink>
                    <NavLink activeClassName='is-active'>
                        <FontAwesomeIcon icon={faRobot} />
                        <span>Engines</span>
                    </NavLink>
                </Navbar>
                
            

        );
    }
}

export default Sections;

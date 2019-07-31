import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPuzzlePiece, faChessBoard, faChessKing, faBook } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper, faArrowAltCircleUp } from '@fortawesome/free-regular-svg-icons';
import Magnus from '../../../img/Magnus.jpg';
import BoardImg from '../../../img/ChessBoard.png';

import './HomePage.css';

class HomePage extends Component {
  render(){
    return (
        <Container>
          <Row>
            <Col xs={8}>
              <Row>
                <Card style={{backgroundColor: 'rgba(200, 200, 200, 0.9)'}}>
                  <Card.Img variant='top' src={Magnus} fluid />
                  <Card.Body>
                    <Card.Title style={{color: 'black'}}>NEWS TITLE</Card.Title>
                    <small className="text-muted">Author: <cite>Andrew Pylypets</cite></small>
                    <Card.Text style={{color: 'black'}}>
                    There is a well-known chess joke (or maybe not even a joke!) that it is much more difficult to sacrifice a pawn than a queen.
                    </Card.Text>
                  </Card.Body>
                </Card>                
              </Row>
              <Row className='pt-3'>
                <Col>
                  <Card style={{backgroundColor: 'rgba(200, 200, 200, 0.9)'}}>
                    <Card.Img variant='top' src={Magnus} fluid />
                    <Card.Body>
                      <Card.Title style={{color: 'black'}}>NEWS TITLE</Card.Title>
                      <small className="text-muted">Author: <cite>Andrew Pylypets</cite></small>
                      <Card.Text style={{color: 'black'}}>
                      There is a well-known chess joke (or maybe not even a joke!) that it is much more difficult to sacrifice a pawn than a queen.
                      </Card.Text>
                    </Card.Body>
                  </Card>                
                </Col>
                <Col>
                  <Card style={{backgroundColor: 'rgba(200, 200, 200, 0.9)'}}>
                      <Card.Img variant='top' src={Magnus} fluid />
                      <Card.Body>
                        <Card.Title style={{color: 'black'}}>NEWS TITLE</Card.Title>
                        <small className="text-muted">Author: <cite>Andrew Pylypets</cite></small>
                        <Card.Text style={{color: 'black'}}>
                        There is a well-known chess joke (or maybe not even a joke!) that it is much more difficult to sacrifice a pawn than a queen.
                        </Card.Text>
                      </Card.Body>
                    </Card>                
                </Col>
              </Row>
              <Row className='pt-3'>
                <Col>
                  <Card style={{backgroundColor: 'rgba(200, 200, 200, 0.9)'}}>
                    <Card.Img variant='top' src={Magnus} fluid />
                    <Card.Body>
                      <Card.Title style={{color: 'black'}}>NEWS TITLE</Card.Title>
                      <small className="text-muted">Author: <cite>Andrew Pylypets</cite></small>
                      <Card.Text style={{color: 'black'}}>
                      There is a well-known chess joke (or maybe not even a joke!) that it is much more difficult to sacrifice a pawn than a queen.
                      </Card.Text>
                    </Card.Body>
                  </Card>                
                </Col>
                <Col>
                  <Card style={{backgroundColor: 'rgba(200, 200, 200, 0.9)'}}>
                      <Card.Img variant='top' src={Magnus} fluid />
                      <Card.Body>
                        <Card.Title style={{color: 'black'}}>NEWS TITLE</Card.Title>
                        <small className="text-muted">Author: <cite>Andrew Pylypets</cite></small>
                        <Card.Text style={{color: 'black'}}>
                        There is a well-known chess joke (or maybe not even a joke!) that it is much more difficult to sacrifice a pawn than a queen.
                        </Card.Text>
                      </Card.Body>
                    </Card>                
                </Col>
              </Row>
            </Col>
            <Col xs={4}>
              <Container className='right-col'>
                <Row>
                  <NavLink to='/puzzles'>
                    <Card style={{backgroundColor: 'rgba(200, 200, 200, 0.9)'}}>
                      <Card.Img src={BoardImg} fluid />
                      <Card.Title style={{color: 'black', textAlign: 'center'}}>Puzzles</Card.Title>
                      <Card.Text style={{color: 'black', textAlign: 'center'}}>Can You solve this?</Card.Text>
                    </Card>
                  </NavLink>
                </Row>
                <Row>2</Row>
                <Row>3</Row>
                <Row>4</Row>
                <Row>5</Row>
              </Container>                      
            </Col>
          </Row>
          <Row>
            <Col>
              DIV3           
            </Col>
            <Col>
              DIV4           
            </Col>
          </Row>
        </Container>
    );    
  }
}

export default HomePage;

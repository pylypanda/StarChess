import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavBar from './components/Navigation/NavBar/NavBar';
import Sections from './components/Navigation/Sections/Sections';
import Footer from './components/Navigation/Footer/Footer';
import HomePage from './components/pages/HomePage/HomePage';
import Learn from './components/pages/Learn/Learn';
import Openings from './components/pages/Openings/Openings';
import Puzzles from './components/pages/Puzzles/Puzzles';
import News from './components/pages/News/News';
import Blog from './components/pages/Blog/Blog';
import Contacts from './components/pages/Contacts/Contacts';

class App extends Component {
  render(){
    return (
      <Router>
      <div className="App">
        <NavBar />
        <Container>
          <Row className='pt-2'>
            <Col xs={2}>
              <Sections />
            </Col>
            <Col xs={10}>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/learn' component={Learn} />
              <Route exact path='/openings' component={Openings} />
              <Route exact path='/puzzles' component={Puzzles} />
              <Route exact path='/news' component={News} />
              <Route exact path='/blog' component={Blog} />
              <Route exact path='/contacts' component={Contacts} />            
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
      </Router>
    );    
  }
}

export default App;

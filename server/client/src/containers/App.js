import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';
import axios from 'axios';

import Background from '../images/bg.jpg';
import Navbar from './Navbar';
import Home from './Home';
import Students from './Students';
import Campus from './Campus';
import SingleCampus from './SingleCampus';

class App extends Component {

  componentDidMount() {
    
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Container>
           <Navbar/>
             <Switch>
              <Route index path="/home" component={Home} />
              <Route exact path="/campus" component={Campus} />
              <Route path="/campus/:id" component={Home} />
              <Route path="/students" component={Students} />
             </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;

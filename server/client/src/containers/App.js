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

class App extends Component {

  componentDidMount() {
    // axios.get('/api/campus')
    //   .then((campus) => {
    //     console.log(campus);
    //   })

    // axios.get('/api/student/1')
    //   .then((student) => {
    //     console.log("GETTING SINGLE STUDENT")
    //     console.log(student)
    // });
  }

  render() {

    return (
      <div className="App">
        <Router>
          <Container>
           <Navbar/>
             <Switch>
              <Route index path="/home" component={Home} />
              <Route path="/campus" component={Campus} />
              <Route path="/students" component={Students} />
             </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './Navbar';
import Home from './Home';
import Students from './Students';
import Campus from './Campus';
import CampusDetail from './CampusDetail';
import StudentDetail from './StudentDetail';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Container>
           <Navbar/>
             <Switch>
              <Route index path="/home" component={Home} />
              <Route exact path="/campus" component={Campus} />
              <Route path="/campus/:id" render={(props) => <CampusDetail {...props}/>} /> 
              <Route exact path="/students" component={Students} />
              <Route path="/students/:id" render={(props) => <StudentDetail {...props}/>} />
             </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;

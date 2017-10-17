import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  componentDidMount() {
    axios.get('/api/campus')
      .then((campus) => {
        console.log(campus);
      })

    axios.get('/api/student/1')
      .then((student) => {
        console.log("GETTING SINGLE STUDENT")
        console.log(student)
    });
  }

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;

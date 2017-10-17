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
    axios.get('/api/campus/1')
      .then(campus => console.log(campus))
    // axios.get('/api/student')
    //   .then((students) => {
    //     console.log(students)
    //   })
  }

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;

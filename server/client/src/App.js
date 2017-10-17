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


    // Edit a student - WORKING
    // axios.put('/api/student/10', { name: 'TEST UPDATE 2' })

    // Create a student - WORKING
    // axios.post('/api/student', { name: 'TEST', email: 'test@test.com' })

    // Delete a campus - WORKING
    // axios.delete('/api/campus/16')

    // Delete a student - WORKING
    // axios.delete('/api/student/9');

    // Remove student from campus with ID - WORKING
    // axios.put('/api/campus/remove/1')

    // POST create new campus - TEST again
    // axios.post('/api/campus', { 
    //   name: 'newcampus', 
    //   picture: 'newpicture' })

    // UPDATE name of single campus - WORKING
    axios.put('/api/campus/15', { name: 'hello world working'})

    // GET single campus - working
    // axios.get('/api/campus/1')
    //   .then(campus => console.log(campus))

    // GET all students - working
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

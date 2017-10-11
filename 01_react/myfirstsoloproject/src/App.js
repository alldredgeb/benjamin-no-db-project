import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';
import Newsfeed from './components/Newsfeed';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nameOfFile: ''
    }

    // componentDidMount = () => {
    //   axios.get('/api/getName')
    //   .then(response => {
    //     console.log(response.data)
    //   })
    // }

  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <div className='below_header'>
        <ToDoList />
        <Newsfeed />
        </div>
      </div>
    );
  }
}

export default App;

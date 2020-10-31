import './App.css';
import React from 'react';
import Todos from './components/Todos'


// or
// ientationimport React, { Component } from 'react'
// class App extends Component {
// }

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Title 1",
        completed: false
      },
      {
        id: 2,
        title: "Title 2",
        completed: true
      },
      {
        id: 3,
        title: "Title 3",
        completed: false
      }
    ]
  };

  markComplete = (id) => {
    console.log(id)
  }

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        {/* Taking Todos in state , passing it to Todos component as props */}
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
}
}

export default App;

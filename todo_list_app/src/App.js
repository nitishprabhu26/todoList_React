import './App.css';
import React from 'react';
import Todos from './components/Todos'
import Header from './components/layout/Header'


// or
// ientationimport React, { Component } from 'react'
// class App extends Component {
// }

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: "Submit Assignment on Time",
        completed: false
      },
      {
        id: 2,
        title: "Prepare for the Test",
        completed: true
      },
      {
        id: 3,
        title: "Pay the bills",
        completed: false
      }
    ]
  };


    // Toggle Complete
    markComplete = id => {
      // console.log(id)
      this.setState({
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      });
    };

    // Delete Todo
    // copying everything which is already there -> using spread operator (...)
    delTodo = id => {
      console.log(id)
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    };

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <Header />
        {/* Taking Todos in state , passing it to Todos component as props */}
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
}
}

export default App;

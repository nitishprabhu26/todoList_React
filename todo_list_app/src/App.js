import "./App.css";
import React from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import { v4 as uuid } from "uuid";

// or
// ientationimport React, { Component } from 'react'
// class App extends Component {
// }

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: "Submit Assignment on Time",
        completed: false,
      },
      {
        id: uuid(),
        title: "Prepare for the Test",
        completed: true,
      },
      {
        id: uuid(),
        title: "Pay the bills",
        completed: false,
      },
    ],
  };

  // Toggle Complete
  markComplete = (id) => {
    // console.log(id)
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo
  // copying everything which is already there -> using spread operator (...)
  delTodo = (id) => {
    // console.log(id)
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    // console.log(this.state.todos)
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          {/* Taking Todos in state , passing it to Todos component as props */}
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;

import "./App.css";
import React from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AddTodo from "./components/AddTodo";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './components/pages/About';
// import axios from 'axios';

// or
// import React, { Component } from 'react'
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

  // using JSONplaceholder
  // using axios to fetch todos from jsonplaceholder
  // state = {
  //   todos: []
  // };

  // using JSONplaceholder
  // componentDidMount() {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //     .then(res => this.setState({ todos: res.data }));
  // }

  // Toggle Complete
  markComplete = (id) => {
    // console.log(id)
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          // todo.completed = !todo.completed;
          todo.completed = todo.completed ? false : true;
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
  
  // using JSONplaceholder
  // Delete Todo
  // delTodo = id => {
  //   axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
  //     this.setState({
  //       todos: [...this.state.todos.filter(todo => todo.id !== id)]
  //     })
  //   );
  // };

  // Add Todo by making POST request to JSONplaceholder - doest save to server but mimics by giving response
  // addTodo = title => {
  //   axios
  //     .post('https://jsonplaceholder.typicode.com/todos', {
  //       title,
  //       completed: false
  //     })
  //     .then(res => {
  //       res.data.id = uuid();
  //       this.setState({ todos: [...this.state.todos, res.data] });
  //     });
  // };

  render() {
    // console.log(this.state.todos)
    return (
      // to use Router, wrap it around everything
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* use 'render' prop to make single route to load both components */}
            <Route exact path="/" render={props => (
                // If we dont need div to wrap the contents. This is kind of ghost Element. doesnt show in the dom
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <h2 style={headerStyle}>My List</h2>
                  {/* Taking Todos in state , passing it to Todos component as props */}
                  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </React.Fragment>
              )} />
            <Route path="/about" component={About} />
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}


const headerStyle = {
  padding: '10px'
}

export default App;

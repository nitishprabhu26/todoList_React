import React from 'react';
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';

class Todos extends React.Component {

render(){
    // console.log(this.props.Todos)

    // https://reactjs.org/docs/lists-and-keys.html#keys
//   return this.props.todos.map((todo) => (
// //   <h3 key={todo.id}>{ todo.title}</h3>
//   ));
  
  return this.props.todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
    ));


}
}
// PropTypes: a sort of validation for properties that a component should have. (Good practice)
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    // markComplete: PropTypes.func.isRequired,
    // delTodo: PropTypes.func.isRequired,
  }

export default Todos;

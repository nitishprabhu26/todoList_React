
import React from 'react';


class Todos extends React.Component {

render(){
    // console.log(this.props.Todos)

    // https://reactjs.org/docs/lists-and-keys.html#keys
  return this.props.todos.map((todo) => (
  <h3 key={todo.id}>{ todo.title}</h3>
  ));

}
}

export default Todos;

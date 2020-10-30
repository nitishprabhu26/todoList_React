import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class TodoItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    // markComplete: PropTypes.func.isRequired,
    // delTodo: PropTypes.func.isRequired,
  };

// not needed since check line 3
// export default TodoItem
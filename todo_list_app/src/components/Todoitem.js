import React, { Component } from 'react'
import PropTypes from "prop-types";

export default class TodoItem extends Component {
    // getStyle = () =>{
    //     if(this.props.todo.completed){
    //         return{
    //             textDecoration: 'line-through'
    //         }
    //     } else{
    //         return{
    //             textDecoration: 'none'
    //         }
    //     }
    // }

    // or use Ternary operator:
    getStyle = () =>{
        return {
            background: "#f4f4f4",
            padding: "10px",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none",
          };
    }
    

    render() {
        return (
            // <div style={itemStyle}></div>
            // <div style={{backgroundColor:'#f4f4f4'}}>
            //     <p>{this.props.todo.title}</p>
            // </div>

            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" />{" "}
                    {this.props.todo.title}
                </p>
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

//   const itemStyle = {
//       backgroundColor:'#f4f4f4'
//     }

// not needed since check line 3
// export default TodoItem
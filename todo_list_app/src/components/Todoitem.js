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
            display: "grid",
            textDecoration: this.props.todo.completed ? "line-through" : "none",
          };
    }
    
    // TypeError: Cannot read property 'props' of undefined (if 'this' is not binded)
    // option 1: bind 'this'
    // 'this' can be used in render and some other life cycle method because its a part of component class
    // markComplete is a custom method that we created. it doest have access to 'this'
    // option 2: other way is to use an arrow function

    // <input type="checkbox" onChange={this.markComplete}/>{" "}
    // markComplete(e){
    //     console.log(this.props)
    // }
    // bind it
    // <input type="checkbox" onChange={this.markComplete.bind(this)}/>{" "}

    // or use an arrow function:
    // markComplete= (e)=>{
    //     console.log(this.props)
    // }
    // <input type="checkbox" onChange={this.markComplete}/>{" "}

    render() {
        const {id,title,completed} = this.props.todo
        return (
            // <div style={itemStyle}></div>
            // <div style={{backgroundColor:'#f4f4f4'}}>
            //     <p>{this.props.todo.title}</p>
            // </div>

            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this, id)} title="Mask as done/undone" />{" "}
                    {/* {this.props.todo.title} */}
                    {/* use this below one, instead of above line */}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle} title="Remove from the list" >
                        x
                    </button>
                </p>
            </div>
        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
  };

//   const itemStyle = {
//       backgroundColor:'#f4f4f4'
//     }

// not needed since check line 3
// export default TodoItem

const btnStyle = {
    background: "#ff0000",
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };
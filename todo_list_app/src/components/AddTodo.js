import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    if(this.state.title){
      this.props.addTodo(this.state.title);
      this.setState({ title: '' });
    }else{
      alert("Please Enter text and try again")
    }
  }

  // setstate is component level state
  // onChange = (e) => this.setState({ title : e.target.value });  
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "grid" }}>
        <input type="text" name="title" style={{ flex: "10", padding: "5px" }} placeholder="Enter a Todo item here"
          value={this.state.title} onChange={this.onChange} />
        <input type="submit" value="Add to List" className="btn" style={{ flex: "1" }} />
      </form>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo;

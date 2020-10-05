import React, { Component } from 'react';

class PlanInput extends Component {

  state = {name:"", 
           owner:""
          }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPlan({name: this.state.name, owner: this.state.owner})
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Give the plan a name</label>
          <input type="text" onChange={this.handleChange} name="name" value={this.state.name}/>
          <label htmlFor="owner">Who are you?</label>
          <input type="text" onChange={this.handleChange} name="owner" value={this.state.owner}/>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default PlanInput;

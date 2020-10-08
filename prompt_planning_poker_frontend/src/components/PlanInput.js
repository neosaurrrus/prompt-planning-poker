import React, { Component } from 'react';
import cuid from 'cuid'
import {Redirect} from 'react-router-dom'
import PlanContainer from '../containers/PlanContainer'

class PlanInput extends Component {

  state = {name:"", 
           owner:"",
           complete: false
          }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const url = cuid()
    this.props.addPlan({name: this.state.name, owner: this.state.owner, url})
    this.setState({
      complete: true,
      completedUrl: `/plans/${url}`
    })

  }
  render() {
    if (this.state.complete === true) {
      return <Redirect to={this.state.completedUrl}>
        <PlanContainer plan={{plan:{name:this.state.name, owner: this.state.owner}}}/>
        </Redirect>
    }
    return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Give the plan a name</label>
          <input type="text" onChange={this.handleChange} name="name" value={this.state.name}/>
          <label htmlFor="owner">Who are you?</label>
          <input type="text" onChange={this.handleChange} name="owner" value={this.state.owner}/>
          <input type="submit"></input>
        </form>

    );
  }
};

export default PlanInput;

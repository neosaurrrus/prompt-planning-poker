import React, { Component } from 'react';
import cuid from 'cuid'
import {Redirect} from 'react-router-dom'
import PlanContainer from '../containers/PlanContainer'


class PlanInput extends Component {

  state = {name:"", 
           pin:"",
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
    this.props.addPlan({name: this.state.name, pin: this.state.pin, url})
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
        <form className='form-input' onSubmit={this.handleSubmit}>
          <h1>Create a New Plan</h1>
          <label htmlFor="name">Give the Plan a Name</label>
          <input type="text" maxLength='15' onChange={this.handleChange} name="name" value={this.state.name}/>
          <label htmlFor="pin">Admin PIN <br></br>(This allows creation and editing of the plan and stories)</label>
          <input type="text" maxLength='4'onChange={this.handleChange} name="pin" value={this.state.pin}/>
          <br></br>
          <input id='plan-submit'type="submit"></input>
        </form>

    );
  }
};

export default PlanInput;

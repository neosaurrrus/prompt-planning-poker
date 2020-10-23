import React, { Component } from 'react';
import cuid from 'cuid'
import {Redirect} from 'react-router-dom'
import PlanContainer from '../containers/PlanContainer'


class PlanInput extends Component {

  state = {name:"", 
          userName:'', 
          pin:''}
        

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const url = cuid()
    this.props.addPlan({name: this.state.name, pin: this.state.pin, url})
    this.props.setUserName({userName:this.state.userName, pin: Number(this.state.pin)})
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
          <h2>New Planning Session</h2>
          <label htmlFor="name">Give the Session a Name</label>
          <input type="text" maxLength='15' onChange={this.handleChange} name="name" value={this.state.name}/>
          <label htmlFor="userName"> Your Name <br></br>(Used for Estimating if you are joining in)</label>
          <input type="text" maxLength='15'onChange={this.handleChange} name="userName" value={this.state.userName}/>
          <label htmlFor="pin">Moderator PIN <br></br>(This allows administration of the planning session)</label>
          <input type="text" maxLength='4'onChange={this.handleChange} name="pin" value={this.state.pin}/>
          <br></br>
          <input id='plan-submit'type="submit"></input>
        </form>

    );
  }
};

export default PlanInput;

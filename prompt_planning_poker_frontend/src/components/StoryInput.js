import React, { Component } from 'react';

class StoryInput extends Component {
  state = {
    as_a:"", 
    want_to:"",
    i_can:"",
    }

  handleChange = (e) => {
    let value = e.target.value
    if (e.target.value.length === 1 && e.target.name === 'as_a'){
      value = value.toUpperCase()
    }
    this.setState({
        [e.target.name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()              
    this.props.addStory(this.state,this.props.plan)
    this.setState({
      as_a:"", 
      want_to:"",
      i_can:""
    })
  }
  render() {
    return (
        <form className='story-input' style={{ display: this.props.formDisplay }}onSubmit={this.handleSubmit}>
          
          <div className='story-input-container'>
            <label htmlFor="name">As a </label><br></br>
            <input type="text" onChange={this.handleChange} name="as_a" value={this.state.as_a}/>  
          </div>
          <div className='story-input-container'>
            <label htmlFor="owner">I would want to</label><br></br>
            <input type="text" onChange={this.handleChange} name="want_to" value={this.state.want_to}/> 
          </div>
          <div className='story-input-container'>
            <label htmlFor="owner">So I can</label><br></br>
            <input type="text" onChange={this.handleChange} name="i_can" value={this.state.i_can}/>
          </div>
          <input type="submit" id='story-submit' value="Add"></input>
        </form>

    );
  }
};

export default StoryInput;

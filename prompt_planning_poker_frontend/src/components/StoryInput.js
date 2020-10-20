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
    //  Need to make sure first char is capitalised for owner and plan too
      
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
          <div>
            <label htmlFor="name">As a </label>
            <input type="text" onChange={this.handleChange} name="as_a" value={this.state.as_a}/> , 
          </div>
          <div>
            <label htmlFor="owner">I would want to</label>
            <input type="text" onChange={this.handleChange} name="want_to" value={this.state.want_to}/> , 
          </div>
          <div>
            <label htmlFor="owner">So I can</label>
            <input type="text" onChange={this.handleChange} name="i_can" value={this.state.i_can}/>.
          </div>
         
          <input type="submit" value="Add Story"></input>
        </form>

    );
  }
};

export default StoryInput;

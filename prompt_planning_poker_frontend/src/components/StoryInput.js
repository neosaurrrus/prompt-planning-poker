import React, { Component } from 'react';

class StoryInput extends Component {
  state = {as_a:"", 
           want_to:"",
           i_can:"",
           complete: false
          }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()              
    this.props.addStory(this.state,this.props.plan)
    this.setState({
      complete: true,
      completedUrl: `/`
    })
  }
  render() {
    // if (this.state.complete === true) {
    //   return <Redirect to={this.state.completedUrl}>
    //     <PlanContainer />
    //     </Redirect>
    // }
    return (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">As a </label>
          <input type="text" onChange={this.handleChange} name="as_a" value={this.state.as_a}/>
          <label htmlFor="owner">I would want to</label>
          <input type="text" onChange={this.handleChange} name="want_to" value={this.state.want_to}/>
          <label htmlFor="owner">So I can</label>
          <input type="text" onChange={this.handleChange} name="i_can" value={this.state.i_can}/>
          <input type="submit"></input>
        </form>

    );
  }
};

export default StoryInput;

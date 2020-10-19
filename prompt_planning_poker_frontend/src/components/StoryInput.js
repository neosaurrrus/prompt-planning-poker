import React, { Component } from 'react';

class StoryInput extends Component {
  state = {
    story:{as_a:"", 
           want_to:"",
           i_can:"",
           complete: false
          }

    }

  handleChange = (e) => {
    this.setState({
      story:{
        [e.target.name]: e.target.value
      }
      
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()              
    this.props.addStory(this.state.story,this.props.plan)
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
        <form className='story-input' style={{ display: this.props.formDisplay }}onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">As a </label>
            <input type="text" onChange={this.handleChange} name="as_a" value={this.state.story.as_a}/> , 
          </div>
          <div>
            <label htmlFor="owner">I would want to</label>
            <input type="text" onChange={this.handleChange} name="want_to" value={this.state.story.want_to}/> , 
          </div>
          <div>
            <label htmlFor="owner">So I can</label>
            <input type="text" onChange={this.handleChange} name="i_can" value={this.state.story.i_can}/>.
          </div>
         
          <input type="submit" value='Add Story'></input>
        </form>

    );
  }
};

export default StoryInput;

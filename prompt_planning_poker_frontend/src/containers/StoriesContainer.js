import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Stories from "../components/Stories"
import StoryInput from "../components/StoryInput"
import {connect} from 'react-redux'
import { getStories, addStory, deleteStory } from '../actions/storyActions'


class StoriesContainer extends Component {

  state = {
    formDisplay: 'none',
    buttonText: 'Add Stories',
  }

  handleAddStory = () =>{
    if (this.state.formDisplay === 'none') {
      this.setState({
        formDisplay: 'flex',
        buttonText: 'Done Adding Stories'
      })
    } else {
      this.setState({
        formDisplay: 'none',
        buttonText: 'Add More Stories'
      })
    }
  }

  checkPin = () => {
    if (!this.props.user || this.props.user.pin !== this.props.plan.pin) {
      return false
    } else if (this.props.user.pin === this.props.plan.pin) {
      return (<div><button id='story-input-button' onClick={this.handleAddStory}>{this.state.buttonText}</button>
      </div>)
    }
  }

  checkRevealedStories = () => {
    const revealedStories = this.props.stories.filter(story => story.revealed === true)
    if (revealedStories.length > 0) {
      return <h4>{revealedStories.length} revealed</h4>
    }
  } 

  render() {
    return (
    <div className='Stories'>
      <h2>{this.props.stories.length} Stories</h2>
      <h4>{this.checkRevealedStories()}</h4>
      <p></p>
        {this.checkPin()}
        <StoryInput addStory={this.props.addStory} formDisplay={this.state.formDisplay} buttonText={this.state.buttonText} plan={this.props.plan} />
        <br></br>
        <Stories plan={this.props.plan} stories={this.props.stories} editPlan={this.props.editPlan} deleteStory={this.props.deleteStory}/>
  </div>
    );
  }
};

  StoriesContainer.defaultProps = {
    plan: {},
    stories:[]
  }
  
  const mapStateToProps = state => {return {
    plan: state.plan,
    stories: state.stories,
    user: state.user
  }}

  const mapDispatchToProps = dispatch => {
    return {
      getStories: (plan) => dispatch(getStories(plan)),
      deleteStory: (id, plan) => dispatch(deleteStory(id, plan)),
      addStory: (story,plan) => dispatch(addStory(story, plan)),
      
    }
  }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoriesContainer));



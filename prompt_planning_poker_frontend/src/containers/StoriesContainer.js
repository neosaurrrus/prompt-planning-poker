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


  render() {
    return (
    <div className='Stories'>
      <h2>{this.props.stories.length} Stories</h2>
      <p></p>
        <button onClick={this.handleAddStory}>{this.state.buttonText}</button>
        <StoryInput addStory={this.props.addStory} formDisplay={this.state.formDisplay} buttonText={this.state.buttonText} plan={this.props.plan} />
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
    stories: state.stories
  }}


  const mapDispatchToProps = dispatch => {
    return {
      getStories: (plan) => dispatch(getStories(plan)),
      deleteStory: (id, plan) => dispatch(deleteStory(id, plan)),
      addStory: (story,plan) => dispatch(addStory(story, plan)),
      
    }
  }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoriesContainer));



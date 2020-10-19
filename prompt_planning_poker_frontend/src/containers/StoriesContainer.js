import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Stories from "../components/Stories"
import StoryInput from "../components/StoryInput"
import {connect} from 'react-redux'
import { getStories, addStory, deleteStory } from '../actions/storyActions'


class StoriesContainer extends Component {

  render() {
    return (
    <div className='Stories'>
        <StoryInput addStory={this.props.addStory} plan={this.props.plan} />
        <Stories plan={this.props.plan} stories={this.props.plan.stories} editPlan={this.props.editPlan} deleteStory={this.props.deleteStory}/>
  </div>
    );
  }
};

  StoriesContainer.defaultProps = {
    plan: {},
    stories:[]
  }

  const mapStateToProps = (state,ownprops) => { 
    const url = ownprops.match.params.url
    const plan = state.plans.find(plan => plan.url === url) 
    return {plan }
  }

  const mapDispatchToProps = dispatch => {
    return {
      getStories: (plan) => dispatch(getStories(plan)),
      deleteStory: (id, plan) => dispatch(deleteStory(id, plan)),
      addStory: (story,plan) => dispatch(addStory(story, plan)),
      
    }
  }
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoriesContainer));



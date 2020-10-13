import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Stories from "../components/Stories"
import StoryInput from "../components/StoryInput"
import {connect} from 'react-redux'
import { getStories, addStory, deleteStory } from '../actions/storyActions'

class StoriesContainer extends Component {

  render() {
    return (
      <div>
        <h2>StoriesContainer</h2>
            <StoryInput addStory={this.props.addStory} plan={this.props.plan} />
            <Stories plan={this.props.plan} stories={this.props.stories} deleteStory={this.props.deleteStory}/>
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
  const stories = state.stories
  return {plan, stories }
}

const mapDispatchToProps = dispatch => {
  return {
    getStories: (plan) => dispatch(getStories(plan)),
    deleteStory: (id, plan) => dispatch(deleteStory(id, plan)),
    addStory: (story,plan) => dispatch(addStory(story, plan)),
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoriesContainer));



import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Stories from "../components/Stories"
import StoryInput from "../components/StoryInput"
import {connect} from 'react-redux'
import { getStories, addStory, deleteStory } from '../actions/storyActions'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
class StoriesContainer extends Component {

  componentDidMount(){
    this.props.getStories(this.props.plan)
  }
  

  render() {

    return (
    
         <div>
           <h2>StoriesContainer</h2>
                <StoryInput addStory={this.props.addStory} plan={this.props.plan} />
                <Stories deletePlan={this.props.deletePlan} plan={this.props.plan} />
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
    // deletePlan: (id) => dispatch(deletePlan(id)),
    addStory: (story,plan) => dispatch(addStory(story, plan)),
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StoriesContainer));



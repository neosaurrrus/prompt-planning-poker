import React, { Component } from 'react';
import Story from './Story'



class Stories extends Component{
  
    render(){

        if (this.props.plan.stories) return this.props.plan.stories.map(story => <Story story={story} key={story.id} plan={this.props.plan} deleteStory={this.props.deleteStory} editPlan={this.props.editPlan}/>)
        return "Loading Stories"
    }

}

export default Stories



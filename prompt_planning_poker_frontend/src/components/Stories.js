import React, { Component } from 'react';
import Story from './Story'



class Stories extends Component{
  
    render(){

        if (this.props.plan.stories) return this.props.plan.stories.map(story => <Story story={story} key={story.id} deleteStory={this.props.deleteStory} plan={this.props.plan}/>)
        return "Loading Stories"
    }

}

export default Stories



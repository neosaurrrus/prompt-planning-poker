import React, { Component } from 'react';
import Story from './Story'



class Stories extends Component{
  
    render(){

        if (this.props.plan.stories){
            const stories = this.props.plan.stories
            const selectedStory =  stories.find( story => story.id === this.props.plan.selectedStory)
            const otherStories =  stories.filter( story => story.id !== this.props.plan.selectedStory)
            console.log(selectedStory)
            return (
                <div>
                    <h4>Selected Story</h4>
                     <Story story={selectedStory} key={selectedStory.id} plan={this.props.plan} deleteStory={this.props.deleteStory} editPlan={this.props.editPlan}/>
                     <h4>Other Stories</h4>
                     {otherStories.map(story => <Story story={story} key={story.id} plan={this.props.plan} deleteStory={this.props.deleteStory} editPlan={this.props.editPlan}/>)}
                </div>
               
            )
        } 
        
        return "Loading Stories"
    }

}

export default Stories



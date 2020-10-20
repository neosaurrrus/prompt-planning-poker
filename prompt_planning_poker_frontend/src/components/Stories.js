import React, { Component } from 'react';
import Story from './Story'



class Stories extends Component{
  
    render(){
   
        let otherStories = {}
        let selectedStory = {}
        const stories = this.props.plan.stories

        if (stories && stories.length === 1){
            selectedStory =  stories.find( story => story.id === this.props.plan.selectedStory)
            debugger
            return (
                <div>
                    <h4>Selected Story</h4>
                     <Story story={selectedStory} key={selectedStory.id} plan={this.props.plan} deleteStory={this.props.deleteStory} editPlan={this.props.editPlan}/>
                </div>
            )
        } else if (stories && stories.length > 1){

            selectedStory =  stories.find( story => story.id === this.props.plan.selectedStory)
            otherStories  =  stories.filter( story => story.id !== this.props.plan.selectedStory).sort( (a,b) => (a.as_a > b.as_a) ? 1 : -1 )
            debugger
            return (
                <div>
                    <h4>Selected Story</h4>
                     <Story story={selectedStory} key={selectedStory.id} plan={this.props.plan} deleteStory={this.props.deleteStory} editPlan={this.props.editPlan}/>
                     <h4>Other Stories</h4>
                     {otherStories.map(story => <Story story={story} key={story.id} plan={this.props.plan} deleteStory={this.props.deleteStory} editPlan={this.props.editPlan}/>)}
                </div>
            )
        }
        
      
        
        return <h3>No Stories Found.</h3>
    }

}

export default Stories



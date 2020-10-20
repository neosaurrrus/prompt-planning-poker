import React, { Component } from 'react';
import Story from './Story'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


class Stories extends Component{
  debugger
    render(){
        
        let otherStories = {}
        let selectedStory = {}
        const stories = this.props.stories || []

        if (stories && stories.length === 1 && this.props.plan.selectedStory){
            selectedStory =  stories.find( story => story.id === this.props.plan.selectedStory)
           
            return (
                <div>
                    <h4>Selected Story</h4>
                     <Story story={selectedStory} key={selectedStory.id} plan={this.props.plan} deleteStory={this.props.deleteStory} editPlan={this.props.editPlan}/>
                </div>
            )
        } else if (stories && stories.length > 1){

            selectedStory =  stories.find( story => story.id === this.props.plan.selectedStory)
            otherStories  =  stories.filter( story => story.id !== this.props.plan.selectedStory).sort( (a,b) => (a.as_a > b.as_a) ? 1 : -1 )
            
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

const mapStateToProps = state => {return {
    plan: state.plan,
    stories: state.stories
  }}



export default connect(mapStateToProps)(Stories)





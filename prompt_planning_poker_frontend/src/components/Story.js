import React, { Component } from 'react';


class Story extends Component{
     
    

    handleDelete = (e) => {
        // e.preventDefault() //doesnt make a difference?
        this.props.deleteStory(this.props.story.id, this.props.plan) 
    }
    handleSelect= (e) => {
        e.preventDefault()
        this.props.editPlan(this.props.plan, {selectedStory: this.props.story.id}) 
    }

   
    renderStory = () => { 
    if (this.props.story) return (
    <div>
       
        <p>As a <strong>{this.props.story.as_a}</strong>,
        I want to <strong>{this.props.story.want_to}</strong>
        , so I can <strong>{this.props.story.i_can}</strong></p>
        <h5>Score: {this.props.story.points}</h5> WORK OUT POINTS! sort by AS_A in rai;ls
        <button onClick={this.handleSelect}>Select Story</button>
        <button onClick={this.handleDelete}>Delete Story</button>
        
     </div>
    )
    }
    
    render(){
        return (
            <div className='story'>
                {this.renderStory()}
            </div>
           
         )
    }
     
}

export default Story

import React, { Component } from 'react';


class Story extends Component{
     
    handleDelete = (e) => {
       
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
            </div>
        )
    }
    renderScore = () => { 
        if (this.props.story && this.props.story.score > 0 && this.props.story.players.length > 1) {
            return (
            <div>
                <h5>Score: {this.props.story.score}</h5>
            </div>
             )
        } else if (this.props.story.players === 1){
            return (
                <div>
                <h5>One more player needed for Score</h5>
              </div>
            )
            
        } else { 
            return (
                <div>
                    <h5>Not Scored Yet</h5>
                </div>
            )
        }
    }
    renderButtons = () => { 
        if (this.props.story && this.checkPin()) return (
            <div>
                <button onClick={this.handleSelect}>Select Story</button>
                <button onClick={this.handleDelete}>Delete Story</button>
            </div>
        )
    }

    checkPin = () => {
        if (!this.props.user || this.props.user.pin !== this.props.plan.pin) {
          return false
        } else if (this.props.user.pin === this.props.plan.pin) {
          return true
        }
      }
  
    
    render(){
        return (
            <div className='story'>
                {this.renderStory()}
                {this.renderScore()}
                {this.renderButtons()}
            </div>
           
         )
    }
     
}

export default Story

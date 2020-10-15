import React, { Component } from 'react';


class Player extends Component{
     
    

    // handleDelete = (e) => {
    //     // e.preventDefault() //doesnt make a difference?
    //     this.props.deleteStory(this.props.story.id, this.props.plan) 
    // }
    // handleSelect= (e) => {
    //     e.preventDefault()
    //     this.props.editPlan(this.props.plan, {selectedStory: this.props.story.id}) 
    // }

    // checkSelected = () =>{
    //     if (this.props.plan.selectedStory === this.props.story.id ) {
    //         return <h4>Selected</h4>
    //     }
    // }
    // renderStory = () => { 
    // if (this.props.story) return (
    // <div>
    //     <p>As a <strong>{this.props.story.as_a}</strong>,</p>
    //     <p>I want to <strong>{this.props.story.want_to}</strong></p>
    //     <p>So I can <strong>{this.props.story.i_can}</strong></p>
    //     <button onClick={this.handleSelect}>Select Story</button>
    //     <button onClick={this.handleDelete}>Delete Story</button>
    //     <hr></hr>
    //  </div>
    // )
    // }

    render(){
        return (
            <div>
                {this.props.player.name} - {this.props.player.score}
            </div>
           
         )
    }
     
}

export default Player

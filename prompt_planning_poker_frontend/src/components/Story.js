import React, { Component } from 'react';


class Story extends Component{
     
    state = {
        story: this.props.story
    }

    renderStory = () => { 
    if (this.state.story) return (
    <div>
        <p>As a <strong>{this.props.story.as_a}</strong>,</p>
        <p>I want to <strong>{this.props.story.want_to}</strong></p>
        <p>So I can <strong>{this.props.story.i_can}</strong></p>
        <button onClick={this.handleDelete}>Delete Story</button>
        <hr></hr>
     </div>
    )
    }
    handleDelete = (e) => {
        e.preventDefault()
        this.setState = ({
            story: {}
        })
        this.props.deleteStory(this.props.story.id, this.props.plan) 
    }
    render(){
        return (
            this.renderStory()
         )
    }
     
}

export default Story

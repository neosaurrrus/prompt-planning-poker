import React, { Component } from 'react';
import Player from './Player'

class Table extends Component{
  
    state = {
        story: this.props.story
    }
    toggleRevealed = () => {
        this.props.toggleStoryReveal(this.props.plan, this.props.story)
    }

    handleReset = (e) => {   
        this.props.deletePlayers(this.props.plan, this.props.story)
    }

    renderPlayers = () => {
        if (this.props.story.players) return this.props.story.players.map(player => <Player revealed={this.props.story.revealed} player={player} key={player.id}/>)
    }

    checkPin = () => {
        if (!this.props.user || this.props.user.pin !== this.props.plan.pin) {
          return false
        } else if (this.props.user.pin === this.props.plan.pin) {
          return (<span>
            <button onClick={this.handleReset} name='reset'>Reset</button> 
            <button onClick={this.toggleRevealed} name='reveal'>Reveal</button>
          </span>
          )
        }
      }

    render(){
        const story = this.props.story
        return (
            <div className='Table'>
                <h2>Scoring</h2>
                <h4>As a {story.as_a}, I want to {story.want_to}, so that{story.i_can}.</h4>
                
                {this.checkPin()}
                {this.renderPlayers()}
               
            </div>
            
        )
    }
}

Table.defaultProps = {
    story: {as_a: 'loading'}
}

export default Table


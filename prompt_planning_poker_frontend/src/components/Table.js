import React, { Component } from 'react';
import Player from './Player'

class Table extends Component{
  
    state = {
        reveal: false,
        story: this.props.story
    }

    handleReveal = (e) => {
        this.setState({
            reveal: !this.state.reveal
        })
    }

    handleReset = (e) => {    //clears all player's previous votes.
      
        this.props.deletePlayers(this.props.plan, this.props.story)


    }
    renderPlayers = () => {
        if (this.props.story.players) return this.props.story.players.map(player => <Player reveal={this.state.reveal} player={player} key={player.id}/>)
    }

    checkPin = () => {
        if (!this.props.user || this.props.user.pin !== this.props.plan.pin) {
          return false
        } else if (this.props.user.pin === this.props.plan.pin) {
          return (<span>
            <button onClick={this.handleReset} name='reset'>Reset</button> 
          </span>
            
          )
        }
      }

    render(){
        const story = this.props.story
        return (
            <div className='Table'>
                <h2>Scoring</h2>
                <h4>As a {story.as_a}, I want to {story.want_to}, so I can {story.i_can}.</h4>
                <button onClick={this.handleReveal} name='reveal'>Reveal</button>
                {this.checkPin()}
                {this.renderPlayers()}
               
            </div>
            
        )
    }
}


Table.defaultProps = {
    story: {as_a: 'fail'}
}

export default Table


import React, { Component } from 'react';
import Player from './Player'

class Table extends Component{
  
    state = {
        reveal: false
    }

    handleReveal = (e) => {
        this.setState({
            reveal: !this.state.reveal
        })
    }

    handleReset = (e) => {    //clears all player's previous votes.
        //set up resetPlayes action
        this.props.deletePlayers(this.props.plan, this.props.story)
        //call resetPlayers action
        // set up Action to put on the story
        //route deletes all players for that story
        //return story in fetch
        //message players have been reset

    }
    renderPlayers = () => {
        if (this.props.story) return this.props.story.players.map(player => <Player reveal={this.state.reveal} player={player} key={player.id}/>)
    }
    render(){
        return (
            <div>
                <h2>Table</h2>
                {this.renderPlayers()}
                <button onClick={this.handleReveal} name='reveal'>Reveal</button>
                <button onClick={this.handleReset} name='reset'>Reset</button> 
            </div>
            
        )
    }

}

export default Table


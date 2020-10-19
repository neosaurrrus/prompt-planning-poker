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

    handleReset = (e) => {
        //deletes all players from a story
        
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


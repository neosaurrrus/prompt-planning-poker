import React, { Component } from 'react';
import Player from './Player'

class Table extends Component{
  
    renderPlayers = () => {
        if (this.props.story) return this.props.story.players.map(player => <Player player={player} key={player.id}/>)
    }
    render(){
        return (
            <div>
                <h2>Table</h2>
                {this.renderPlayers()}
            </div>
            
        )
    }

}

export default Table


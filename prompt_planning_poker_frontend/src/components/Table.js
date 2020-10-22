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
    render(){
        return (
            <div className='Table'>
                <h2>Team Scores</h2>
                <p>{this.props.story.as_a}</p>
                <button onClick={this.handleReveal} name='reveal'>Reveal</button>
                <button onClick={this.handleReset} name='reset'>Reset</button> 
                {this.renderPlayers()}
               
            </div>
            
        )
    }
}


Table.defaultProps = {
    story: {as_a: 'fail'}
}

export default Table


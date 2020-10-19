import React, { Component } from 'react';


class Player extends Component{
     
    renderReveal = () => {
        return this.props.reveal ? this.props.player.score : '???'
    }

    render(){
        return (
            <div>
                {this.props.player.name} - {this.renderReveal()}
            </div>
           
         )
    }
     
}

export default Player

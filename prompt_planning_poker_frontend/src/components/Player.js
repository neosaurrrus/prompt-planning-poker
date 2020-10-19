import React, { Component } from 'react';


class Player extends Component{
     
    renderReveal = () => {
        return this.props.reveal ? this.props.player.score : '???'
    }

    render(){
        return (
            <div className='player'>
                <span>{this.props.player.name}</span>  <span>{this.renderReveal()}</span>
            </div>
           
         )
    }
     
}

export default Player

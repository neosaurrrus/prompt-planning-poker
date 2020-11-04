import React from 'react';

function Player(props){
     
    const renderReveal = () => {
        return props.revealed ? props.player.score : 'Unknown'
    }
    return (
        <div className='player'>
            <span>{props.player.name}</span>  <span>{renderReveal()}</span>
        </div>
        
        )
  
     
}

export default Player

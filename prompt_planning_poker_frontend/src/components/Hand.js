import React from 'react';
import Card from './Card'

function Hand(props){

    const handleClick = (e) => {
      props.addPlayer(props.plan,props.story, {name:props.user.userName,score: Number(e.target.innerText)})
   }
    return (
        <div className='Hand'>
            <h2>Choose a Card to Play</h2>
                <div className='card-container'>
                    <Card value='1' handleClick={handleClick}/>
                    <Card value='3' handleClick={handleClick}/>
                    <Card value='5' handleClick={handleClick}/>
                    <Card value='8' handleClick={handleClick}/>
                    <Card value='13' handleClick={handleClick}/>
                    <Card value='21' handleClick={handleClick}/>
                    <Card value='34' handleClick={handleClick}/>
                    <Card value='55' handleClick={handleClick}/>
                    <Card value='89' handleClick={handleClick}/>
            </div>
        </div>
    )
}

export default Hand


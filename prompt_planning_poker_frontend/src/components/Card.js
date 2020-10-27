import React from 'react';

function Card(props){
    return (
        <div className='card' onClick={props.handleClick} value={props.value} name={props.value}>
            {props.value}
        </div>   
    )
}

export default Card


import React from 'react'

function PlanHeader(props){
    return (
        <div>
            <h1>{props.plan.name}</h1>
            <h2>{props.plan.owner}</h2>
            <button onClick={props.handleDelete}> Delete </button>
        </div>
       
    )
}

export default PlanHeader
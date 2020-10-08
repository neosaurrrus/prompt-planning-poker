import React from 'react'



function Story(props){
     
    const handleDelete = () => {
        
        // props.deletePlan(props.plan.id)
        props.history.push("/");
      }
    return (
        <div>
            <p>As a <strong>{props.story.as_a}</strong>,</p>
            <p>I want to <strong>{props.story.want_to}</strong></p>
            <p>So I can <strong>{props.story.i_can}</strong></p>
            <hr></hr>
        </div>
       
    )
}

export default Story
import React from 'react'



function Story(props){
     
    const handleDelete = () => {
        
        // props.deletePlan(props.plan.id)
        props.history.push("/");
      }
    return (
        <div>
            <h1>{props.story.as_a}</h1>
            <h1>{props.story.want_to}</h1>
            <h1>{props.story.i_can}</h1>
    
        </div>
       
    )
}

export default Story
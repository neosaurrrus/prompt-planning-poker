import React from 'react'
import Story from './Story'



function Stories(props){
  
    const renderStories = () =>{
        if (props.plan) {
            return props.stories.map(story => <Story story={story} deleteStory={props.deleteStory} plan={props.plan}/>)
        }
        return "Loading Stories"

    }

    return (
        <div>
            {renderStories()}
        </div>
       
    )
}

Stories.defaultProps = {
    plan:{
        stories:["",""]
    }
}

export default Stories
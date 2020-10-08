import React from 'react'
import Story from './Story'



function Stories(props){
    const renderStories = () => {
        return props.stories.map( story => <Story story={story}/>)
      }

    return (
        <div>
           {renderStories()}
        </div>
       
    )
}

export default Stories
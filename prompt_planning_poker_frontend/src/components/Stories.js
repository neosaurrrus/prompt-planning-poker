import React, { Component } from 'react';
import Story from './Story'



class Stories extends Component{
  
    // state = {
    //     stories :[]
    // }

    // componentWillReceiveProps(){ 
    //     this.setState({
    //         stories: this.props.stories
    //     })
    // }
    // componentWillReceiveProps(){ //causes infinate loop
    //     if (this.props.stories){
    //         this.setState({
    //             stories: this.props.getStories(this.props.plan)
    //         })
    //     }
    
    // }
    render(){

        if (this.props.stories) return this.props.stories.map(story => <Story story={story} deleteStory={this.props.deleteStory} plan={this.props.plan}/>)
        
        return "Loading Stories"
    }

}

Stories.defaultProps = {
   
        stories:["1","2"]


}

export default Stories



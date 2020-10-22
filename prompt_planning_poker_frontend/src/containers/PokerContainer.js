import React, { Component } from 'react';
import Table from '../components/Table'
import Hand from '../components/Hand'
import {connect} from 'react-redux'
import {addPlayer} from '../actions/playerActions'
import {deletePlayers, getStory} from '../actions/storyActions'

class PokerContainer extends Component {


  state = {
    plan: {}
  }
  // componentWillUpdate(){

  //   if (this.props.plan){
  //     this.props.getStory(this.props.plan)
  //   }
    
  // }

  // componentWillReceiveProps(nextProps) {
  //   // You don't have to do this check first, but it can help prevent an unneeded render
  //   if (nextProps.plan !== this.state.plan) {
  //     this.setState({ plan: nextProps.plan });
  //   }
  // }

 getStory= () =>{
    if (this.props.stories) {
        return this.props.stories.find(story => story.id === this.props.plan.selectedStory)
      }
  }
  

  


  render() {
    
    return (
      <div className='Game'>
        <Table id="Table" plan={this.props.plan} deletePlayers={this.props.deletePlayers} story={this.getStory()}/>
        <Hand id="Hand" plan={this.props.plan} addPlayer={this.props.addPlayer} user={this.props.user} story={this.getStory()} /> 
      </div>
    );
  }
};

PokerContainer.defaultProps = {
  plan:{
    name:"Error",
   owner:"Error",
   stories: []
  },

}



const mapStateToProps = state => {return {
  plan: state.plan,
  stories: state.stories,
  user: state.user,
  story: state.story
}}

const mapDispatchToProps = dispatch => {
  return {
    addPlayer: (plan,story,player) => dispatch(addPlayer(plan, story, player)),
    deletePlayers: (plan,story) => dispatch(deletePlayers(plan, story)),
    getStory:(plan) =>  dispatch(getStory(plan))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PokerContainer)


//Get story for the relavent plan (where it is selected)
//give that as props to table.hand
//get players returning for a given story (in controller)
//

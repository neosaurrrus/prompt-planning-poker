import React, { Component } from 'react';
import Table from '../components/Table'
import Hand from '../components/Hand'
import {connect} from 'react-redux'
import {addPlayer} from '../actions/playerActions'

class PokerContainer extends Component {

  getStory = () => {

   if (this.props.plan.stories) return this.props.plan.stories.find(story => story.id === this.props.plan.selectedStory)
  }

  render() {
    return (
      <div>
        <h2>Poker</h2>
        <Table plan={this.props.plan} story={this.getStory()}/>
        <Hand  plan={this.props.plan} story={this.getStory()} addPlayer={this.props.addPlayer}  /> Need to add addScoreMethod
      </div>
    );
  }
};



// const mapStateToProps = (state,ownprops) => { 
//   const url = ownprops.match.params.url
//   const plan = state.plans.find(plan => plan.url === url) 
//   return {plan }
// }

const mapDispatchToProps = dispatch => {
  return {
    addPlayer: (plan,story,player) => dispatch(addPlayer(plan, story, player)),
  }
}
export default connect(null, mapDispatchToProps)(PokerContainer)


//Get story for the relavent plan (where it is selected)
//give that as props to table.hand
//get players returning for a given story (in controller)
//

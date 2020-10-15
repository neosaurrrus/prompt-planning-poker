import React, { Component } from 'react';
import Table from '../components/Table'
import Hand from '../components/Hand'

class PokerContainer extends Component {

  getStory = () => {

   if (this.props.plan.stories) return this.props.plan.stories.find(story => story.id === this.props.plan.selectedStory)
  }

  render() {
    return (
      <div>
        <h2>Poker</h2>
        <Table plan={this.props.plan} story={this.getStory()}/>
        <Hand  /> Need to add addScoreMethod
      </div>
    );
  }
};


export default PokerContainer;


//Get story for the relavent plan (where it is selected)
//give that as props to table.hand
//get players returning for a given story (in controller)
//

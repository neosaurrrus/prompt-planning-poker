import React, { Component } from 'react';
import Table from '../components/Table'
import Hand from '../components/Hand'

class PokerContainer extends Component {

  render() {
    return (
      <div>
        <h2>Poker</h2>
        <Table plan={this.props.plan}/>
        <Hand plan={this.props.plan}/>
      </div>
    );
  }
};


export default PokerContainer;



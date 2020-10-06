import React, { Component } from 'react';


class Plan extends Component {

state = {name:"", owner:""}

  handleDelete = (e) => {
    this.props.deletePlan(this.props.plan.id)
  }

  render() {
    const { name, owner} = this.props.plan;

    return (
      <div>
        <li>
          {name} - {owner}
          <button onClick={this.handleDelete}> X </button>
        </li>
      </div>
    );
  }
};

export default Plan;

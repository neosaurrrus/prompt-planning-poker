import React, { Component } from 'react';
import {connect} from 'react-redux'

import PlanInput from '../components/PlanInput';
import Intro from '../components/Intro'
import PlanContainer from './PlanContainer';

import { getPlans, addPlan, deletePlan, setUser } from '../actions/planActions'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


class AppContainer extends Component {

  state = {
    userName:"GUEST"
  }

  componentDidMount(){
    this.props.getPlans()
    this.props.setUser(this.state)
  }
  componentWillReceiveProps(){
    this.setState(this.props.user)
  }

  handleNameChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value.toUpperCase(),
    }, this.afterSetState)
  }
  handlePinChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, this.afterSetState)
  }

  afterSetState = () => {
    this.props.setUser(this.state)
  }

  render() {
    if (this.props.user){
      
      return (
        <Router>
        <nav className='App-header'>
              <Link to="/">Prompt-Planning-Poker</Link>
              <div>
                <label>Name:</label><input type='text' name='userName' value={this.props.user.userName} maxLength='10' onChange={this.handleNameChange} placeholder='ANON'></input>
                <label>PIN:</label><input type='password' id='pin' name='pin' value={this.props.user.pin} maxLength='4' onChange={this.handlePinChange} placeholder=''></input>
              </div>
              <Link id='new-plan'to="/new-plan">New Session</Link>
        </nav>
       
          <Switch>
            <Route path="/new-plan">
              <PlanInput setUser={this.props.setUser} addPlan={this.props.addPlan} getPlanUrl={this.getPlanUrl} />
            </Route>
            <Route path="/plans/:url">
            <PlanContainer deletePlan={this.props.deletePlan} plans={this.props.plans} />
            </Route> 
            <Route path="/">
            <Intro></Intro>
            </Route>
          </Switch>
        </Router>

       
    )
    }
   return null
  }
}


const mapStateToProps = state => { 
  return {plans: state.plans,
          setUserName: state.setUserName,
          user: state.user
          }
}

const mapDispatchToProps = dispatch => {
  return {
    getPlans: () => dispatch(getPlans()),
    deletePlan: (id) => dispatch(deletePlan(id)),
    addPlan: (plan) => dispatch(addPlan(plan)),
    setUser: (user) => dispatch(setUser(user))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PlanHeader from '../components/PlanHeader'
import Footer from '../components/Footer'
import StoriesContainer from './StoriesContainer'
import PokerContainer from './PokerContainer'
import { getPlan, getPlans, addPlan, deletePlan,editPlan} from '../actions/planActions'


class PlanContainer extends Component {
  updateTimeout;

  getPlans = ()=>{
    this.props.getPlans()
    return this.props.plans.find( plan => plan.url === this.props.match.params.url)
  }
 
 componentDidMount() { //starts polling of DB
    this.updatePlan();
  }
  
  updatePlan = async () => {
    await this.props.getPlan(this.props.match.params.url)
    this.updateTimeout = setTimeout(this.updatePlan, 1000)
  }
  componentWillUnmount(){
    clearTimeout(this.updateTimeout)
  }

  render() {
    return (
         <div className='grid-container'>           
           <PlanHeader  deletePlan={this.props.deletePlan} getPlan={this.props.getPlan}editPlan={this.props.editPlan} plan={this.props.plan}/>
           <StoriesContainer stories={this.props.plan.stories} plan={this.props.plan} editPlan={this.props.editPlan} />
           <PokerContainer></PokerContainer>
           <Footer plan={this.props.plan}></Footer>
       </div>
    );
  }
};
 

PlanContainer.defaultProps = {
  plan:{
    name:"Error",
  owner:"Error"
  },
  plans:[]
}

const mapStateToProps = (state, ownProps) => { 
  return {plans: state.plans,
         plan: state.plans.find( plan => plan.url === ownProps.match.params.url)

}
}

const mapDispatchToProps = (dispatch,ownProps) => {

  return {
    getPlan: (id) => dispatch(getPlan(id)),
    getPlans: () => dispatch(getPlans()),
    deletePlan: (id) => dispatch(deletePlan(id)),
    addPlan: (plan) => dispatch(addPlan(plan)),
    editPlan: (plan, changedKey) => dispatch(editPlan(plan,changedKey))
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(PlanContainer));



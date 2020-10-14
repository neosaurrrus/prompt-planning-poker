import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import PlanInput from './PlanInput'


class PlanHeader extends Component{

    handleDelete = (e) => {
        e.preventDefault()
        this.props.deletePlan(this.props.plan.id)
        this.props.history.push("/");
      }
    handleEdit = (e) => {
        e.preventDefault()
       return <PlanInput plan={this.props.plan} edit="yes" />
    }
    renderName = () => {
    
    }
    
    render(){
      return (
  
        <div>

            <h1>{this.renderName}</h1> <button onClick={this.handleEdit}>Edit</button>
            <h2>{this.props.plan.owner}</h2>
            <button onClick={this.handleDelete}>Delete</button>
           
        </div>
       
    )
    }
    
}

PlanHeader.defaultProps = {
    plan:{
      name:"Loading...",
      owner:"Loading.."
    }
  }

export default withRouter(PlanHeader)
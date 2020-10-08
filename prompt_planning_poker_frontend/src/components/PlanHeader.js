import React from 'react'
import {withRouter} from 'react-router-dom'
import AppContainer from '../containers/AppContainer';

function PlanHeader(props){
    const handleDelete = (e) => {
        let homeUrl = "http://google.com"
        e.preventDefault()
        props.deletePlan(props.plan.id)
        props.history.push("/");
      }

    return (
        <div>
            <h1>{props.plan.name}</h1>
            <h2>{props.plan.owner}</h2>
            <button onClick={handleDelete}>Delete</button>
        </div>
       
    )
}

PlanHeader.defaultProps = {
    plan:{
      name:"Loading...",
    owner:"Loading.."
    }
  }

export default withRouter(PlanHeader)
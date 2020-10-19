import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'


class PlanHeader extends Component{

  state = {
    name: this.props.plan.name,
    editMode: false
  }
  
    handleDelete = (e) => {
        e.preventDefault()
        this.props.deletePlan(this.props.plan.id)
        this.props.history.push("/");
      }
    handleSubmit= (e) => {
        e.preventDefault()
        console.log(this.state.name)
        this.setState({
          editMode: false
        })
        this.props.editPlan(this.props.plan, {name: this.state.name})
        // this.props.getPlan(this.props.plan.url) 
      }
    handleEdit = (e) => {
        e.preventDefault()
       this.setState({
         name: this.props.plan.name,
         editMode : true
       })
       this.props.getPlan(this.props.plan.url)
    }
    handleChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }


    renderName = () => {
     
    
    }
    
    render(){
      if (!this.state.editMode){
        return (
        <div className='Plan'>
          <h2>{this.props.plan.name}</h2>
          <span><button onClick={this.handleEdit}>Edit</button><button onClick={this.handleDelete}>Delete</button></span>
        </div>
        )
      } else {
        return (
           <div className='Plan'>
             <form onSubmit={this.handleSubmit}>
              <h2> <input id='plan-edit' type="text" onChange={this.handleChange} name="name" value={this.state.name}/><input type="submit" value="💾"/></h2>
            </form>
          </div>
         
        )
      } 
    }
    
}
const mapStateToProps = state => {return {
  // reviews: state.reviews.filter(review => review.id === this.props.restaurant.id)
  plan: state.plan
}}

PlanHeader.defaultProps = {
    plan:{
      name:"Loading...",
      owner:"Loading.."
    }
  }

export default withRouter(connect(mapStateToProps)(PlanHeader))


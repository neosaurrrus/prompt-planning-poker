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
        this.props.getPlan(this.props.plan.url) 
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
      if (!this.state.editMode){
        return <div>
          <h1>{this.props.plan.name}</h1> 
          <button onClick={this.handleEdit}>Edit</button>
        </div> 
      } else {
        return (
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleChange} name="name" value={this.state.name}/>
            <input type="submit" value="Save"/>
         </form>

        )
      } 
    
    }
    
    render(){
      return (
        <div>
            <h1>{this.renderName()}</h1> 
            <h2>{this.props.plan.owner}</h2>
            <button onClick={this.handleDelete}>Delete</button>
        </div>
       
     )
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


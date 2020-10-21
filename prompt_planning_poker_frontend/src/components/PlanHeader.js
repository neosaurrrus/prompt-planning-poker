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

    getScore = () => {
     
      if (this.props.stories && this.props.stories.length > 0 ) {
        let scores = this.props.stories.map( story => story.score)
        let totalScore = scores.reduce((acc, score) => acc+score)
        return totalScore === null ? 'Now score some stories!' : `Total Score: ${totalScore}`
      
      } 
      
      return `Add some stories and get playing`
    }

  
    render(){
      if (!this.state.editMode){
        return (
        <div className='Plan'>
          <h1>{this.props.plan.name}</h1>
          <p>{this.getScore()}</p>
          <span><button onClick={this.handleEdit}>Edit</button><button onClick={this.handleDelete}>Delete</button></span>
        </div>
        )
      } else {
        return (
           <div className='Plan'>
             <form onSubmit={this.handleSubmit}>
              <input id='plan-edit'type="text" onChange={this.handleChange} name="name" value={this.state.name}/><br></br>
              <input id='plan-save' type="submit" value="save"/>
            </form>
          </div>
         
        )
      } 
    }
    
}
const mapStateToProps = state => {return {
  plan: state.plan,
  stories: state.stories
  
}}

PlanHeader.defaultProps = {
    plan:{
      name:"Loading...",
      owner:"Loading.."
    }
  }

export default withRouter(connect(mapStateToProps)(PlanHeader))


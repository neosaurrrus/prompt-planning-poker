import React, { Component } from 'react';
import {connect} from 'react-redux'
import { setUser } from '../actions/planActions'

class UserPin extends Component {

  state = {
    userName:"GUEST"
  }

  componentDidMount(){
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
            <div>
                <label>Name:</label><input type='text' className='login' name='userName' value={this.props.user.userName} maxLength='10' onChange={this.handleNameChange} placeholder='ANON'></input>
                <label>PIN:</label><input type='password' classNane='login' name='pin' value={this.props.user.pin} maxLength='4' onChange={this.handlePinChange} placeholder=''></input>
            </div>
        )
        }
    }
}


const mapStateToProps = state => { 
  return {
          setUserName: state.setUserName,
          user: state.user
          }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPin);

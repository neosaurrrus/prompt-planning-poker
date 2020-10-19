import React, { Component } from 'react';




class Hand extends Component{
  
    state = {
        name: '',
        score: null,
    }

    handleClick = (e) => {
        this.setState({
          score: e.target.value,
        })
      }
    handleNameChange = (e) => {
        this.setState({
          name: e.target.value,
        })
      }
    
      handleSubmit = (e) => {
         
        // this.props.addStory(this.state,this.props.plan)
        // this.setState({
        //   complete: true,
        //   completedUrl: `/`
        //get player
        // const newStory = this.props.story
        // const newPlayers = this.props.story.players.filter(player => player.name !== this.state.name)
        // newPlayers.push({name: this.state.name, score: this.state.score})
        // console.log(newPlayers)
        // const newPlayer = { name: this.state.name, score: this.state.score}
         this.props.addPlayer(this.props.plan,this.props.story, this.state)
        // })
      }

    render(){
        return (
            <div className='Hand'>
              <h2>Choose a Card to Play</h2>
              <p>Sexy cards</p>
              <input type='text' name='name' onChange={this.handleNameChange} value={this.state.name} placeholder="Enter your Name" />
              <button onClick={this.handleClick} name='1' value='1'>1</button>
              <button onClick={this.handleClick} name='2' value='2'>2</button>
              <button onClick={this.handleClick} name='3' value='3'>3</button>
              <button onClick={this.handleClick} name='4' value='5'>5</button>
              <button onClick={this.handleClick} name='5' value='8'>8</button>
              <button onClick={this.handleClick} name='13' value='13'>13</button>
              <button onClick={this.handleClick} name='21' value='21'>21</button>
              <button onClick={this.handleClick} name='34' value='34'>34</button>
              <button onClick={this.handleClick} name='55' value='55'>55</button>
              <button onClick={this.handleClick} name='89' value='89'>89</button>
              
              <button onClick={this.handleSubmit} name='submit'>Submit Score</button>
            </div>
        )
    }

}

export default Hand


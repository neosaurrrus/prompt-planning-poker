import React, { Component } from 'react';

class Hand extends Component{

    handleClick = (e) => {
      this.props.addPlayer(this.props.plan,this.props.story, {name:this.props.user.userName,score: Number(e.target.innerText)})
  }
  

    render(){
        return (
            <div className='Hand'>
              <h2>Choose a Card to Play</h2>
                  <div className='card-container'>
                  <div className='card card-1' onClick={this.handleClick} name='1' value='1'>1</div>
                  <div className='card card-2' onClick={this.handleClick} name='2' value='2'>2</div>
                  <div className='card card-3' onClick={this.handleClick} name='3' value='3'>3</div>
                  <div className='card card-4' onClick={this.handleClick} name='4' value='5'>5</div>
                  <div className='card card-5' onClick={this.handleClick} name='5' value='8'>8</div>
                  <div className='card card-6' onClick={this.handleClick} name='13' value='13'>13</div>
                  <div className='card card-7' onClick={this.handleClick} name='21' value='21'>21</div>
                  <div className='card card-8' onClick={this.handleClick} name='34' value='34'>34</div>
                  <div className='card card-9' onClick={this.handleClick} name='55' value='55'>55</div>
                  <div className='card card-10' onClick={this.handleClick} name='89' value='89'>89</div>
                </div>
            </div>
        )
    }

}

export default Hand


import React from 'react';

import { HashLink as Link } from 'react-router-hash-link';


function Intro(){
 
 
    return (
        <div>
            <div id='intro-container'>
            <div id='intro'>
             <h1>Prompt <br></br>Planning<br></br>Poker</h1>
              </div>
            <div id='blurb'>
                <h4>Easy Estimation for SCRUM Teams</h4>
            <div id="intro-buttons">
                <span id='intro-button-container'>
                    <button><Link id='new-plan'to="/new-plan">New Plan</Link></button>
                    <button><Link id='new-plan' to="#info">Learn More</Link></button>
                </span>
            </div>
            </div>
            <div id='intro-backdrop'>
            </div>
        </div>
        <div id="info">
            <h3>What is Planning Poker?</h3>
            <p>Planning poker, also called Scrum poker, is a consensus-based, gamified technique for estimating, mostly used to estimate effort or relative size of development goals in software development. In planning poker, members of the group make estimates by playing numbered cards face-down to the table, instead of speaking them aloud. The cards are revealed, and the estimates are then discussed.</p>
            <h3>Why do it?</h3>
            <p>The reason to use planning poker is to avoid the influence of the other participants. If a number is spoken, it can sound like a suggestion and influence the other participants' sizing. Planning poker should force people to think independently and propose their numbers simultaneously. This is accomplished by requiring that all participants show their card at the same time.</p> 
        </div>
        </div>
        
        
        

    ) 
    
}
export default Intro

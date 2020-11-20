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
                <h3>Common Pitfalls</h3>
                <p>One pitfall of Planning Poker resides in making “convergence to consensus estimate” an obligation rather than a natural result of the conversation that follows a round of play. Doing so runs the risk of erasing useful information, i.e. the degree of uncertainty conveyed by a wide spread in the initial estimates.</p>
                <h3>How to do it</h3>
                <h4>Setup</h4>
                <p>First, a plan is set up by the moderator, typically the Product Owner. The moderator PIN allows any number of people to perform moderator functions. A plan should be populated with user stories. When satisfied, share the URL with the team members.  Ensure the team is on a call to allow discussion. </p> 
                <h4>First Round</h4>
                <p>Each team member that accesses the url, can play cards bearing numerical values appropriate for points estimation of a user story. The moderator briefly states the intent and value of a story. Each member of the development team silently picks an estimate card. This will appear to everyone face down. When the moderator is ready, the cards are turned face up.</p>
                <h4>Post-Round</h4>
                <p> Now is the time for discussion. Typically, two (or more) team members who gave the high and low estimate justify their reasoning. After brief discussion, the moderator can reset the table, and the team may seek convergence toward a consensus estimate by playing one or more further rounds. </p>
            </div>
        </div>
        
        
        

    ) 
    
}
export default Intro

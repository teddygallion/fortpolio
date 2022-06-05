import React, { Component } from 'react'
import smolskul from './smolskul.png'
import fms from './fms.png'
import pyjack from './pyjack.png'

export default class Projects extends Component{
	render(){
		return(
			<div className ="ProjectsContainer">
				  <section className="projects" id="projects">
			    		<h2 className="projects-title">Some of my Recent Projects</h2>
			    			<div className="projects-container">
			      				<div className="project-container project-card">
							        <img
							          src={fms}
							          alt="project1"
							          loading="lazy"
							          className="fms"
							        />
			        				<h3 className="project-title">FindMySound</h3>
							        <p className="project-details">
								         A Spotify app designed to take your top artists and suggest new,
								         unheard artists most similar to your existing favorites.
								         Discover your new favorite band today!
							        </p>
			        				<a href="https://github.com/teddygallion/findmysound" target="_blank" rel="noreferrer" className="project-link"> Github</a> <br/>
			        				<a href ="https://findmysound.herokuapp.com/" target="_blank" rel="noreferrer" className = "project-link">Check it Out!</a>
			      				</div>
						    <div className="project-container project-card">
						      <img
						        src={smolskul}
						        alt="project2"
						        loading="lazy" 
						        className="project-pic"
						      />
			      				<h3 className="project-title">Timely</h3>
							    <p className="project-details">
									A react app built around the concept of using a pomodoro timer to maximise productivity and minimize distractions.
							    </p>
								
			     				<a href="https://github.com/teddygallion/timely" target="_blank" rel="noreferrer" className="project-link"> Github</a>                      
			    			</div>
					    <div className="project-container project-card">
				      		<img
						        src={pyjack} 
						        alt="project3"
						        loading="lazy"
						        className="pyjack"
						      />
					      	<h3 className="project-title">Pyjack</h3>
					     	<p className="project-details">
						        Blackjack built in Python. Come try your hand and win (or lose!) imaginary money!
					      	</p> 
			      			<a href="https://github.com/teddygallion/pyjack" target="_blank" rel="noreferrer" className="project-link">Github</a> <br/>
			      			<a href="https://replit.com/@teddybob/pyjack" target="_blank" rel="noreferrer" className ='project-link'>Check it out! </a>
			    		</div>
			    	</div>
			  </section>
    		</div>
			)
	}
}
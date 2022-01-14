import React, { Component } from 'react'
import smolskul from './smolskul.png'

export default class Projects extends Component{
	render(){
		return(
			<div className ="ProjectsContainer">
				  <section className="projects" id="projects">
			    		<h2 className="projects-title">Some of my Recent Projects</h2>
			    			<div className="projects-container">
			      				<div className="project-container project-card">
							        <img
							          src={smolskul}
							          alt="project1"
							          loading="lazy"
							          className="project-pic"
							        />
			        				<h3 className="project-title">Project1</h3>
							        <p className="project-details">
							          Project1  Project1  Project1  Project1  Project1  
							          Project1  Project1  Project1  Project1  Project1
							          Project1  Project1  Project1  Project1  Project1
							          Project1  Project1  Project1  Project1  Project1
							          Project1  Project1  Project1  Project1  Project1 
							        </p>
			        				<a href="https://github.com/teddygallion" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
			      				</div>
						    <div className="project-container project-card">
						      <img
						        src={smolskul}
						        alt="project2"
						        loading="lazy" 
						        className="project-pic"
						      />
			      				<h3 className="project-title">project2</h3>
							    <p className="project-details">
									Project2  Project2  Project2  Project2  Project2
									Project2  Project2  Project2  Project2  Project2  
									Project2  Project2  Project2  Project2  Project2  
									Project2  Project2  Project2  Project2  Project2  
									Project2  Project2  Project2  Project2  Project2 
							    </p>
			     				<a href="https://github.com/teddygallion" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
			    			</div>
					    <div className="project-container project-card">
				      		<img
						        src={smolskul}
						        alt="project3"
						        loading="lazy"
						        className="project-pic"
						      />
					      	<h3 className="project-title">Project3</h3>
					     	<p className="project-details">
						        Project3  Project3  Project3  Project3  Project3
						        Project3  Project3  Project3  Project3  Project3
						        Project3  Project3  Project3  Project3  Project3
						        Project3  Project3  Project3  Project3  Project3
						        Project3  Project3  Project3  Project3  Project3 
					      	</p> 
			      			<a href="https://github.com/teddygallion" target="_blank" rel="noreferrer" className="project-link">Check it Out</a>
			    		</div>
			    	</div>
			  </section>
    		</div>
			)
	}
}
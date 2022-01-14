import React, {Component} from 'react'
import smolskul from './smolskul.png'

export default class Bio extends Component{
	render(){
		return(
			<div className='Bio'>
     			<section className="hero" id="about">
				    <img
				      src={smolskul}
				      alt="Teddy, a man who develops things"
				      loading="lazy"
				      className="hero-img"
				    />
			    	<div className="mini-bio">
				      <h2 className="bio-title">About Me</h2>
				        <p className="bio-text">
				          My name is Teddy, and I'm a fullstack developer with over 5 years of experience in Javascript and Python development. My hobbies include coding, coffee and cats.
				        </p>    		
	    			</div>
  				</section>	
  			<section className="more-about">
		    <h2>More About Me</h2>
		      <p>
		         I've been programming in some form or another since the Myspace era, and I have always had a fascination with the internet and the way we as humans interact with it. I love programming because it affords me the opportunity to bring beautiful ideas to the people, and I love finding unique solutions to problems.
		      </p>
		      <p>
		         I've been working primarily with Javascript, HTML, and CSS for the past 5 years, working specifically with React for 3 of those, and in my spare time I like playing around with other frameworks and libraries like p5js. More recently I've been working in back-end development with Python, PostgreSQL and containerization with Docker and Kubernetes.
		      </p>
		      <p>
		        Away from the computer I am also a caffeine enthusiast and proud cat father. When I'm not writing code or hanging out with my cats, I enjoy cooking(Ask me for my green curry recipe!), making music, skating, biking, and enjoying the outdoors.
		  	  </p>
		  </section>
		</div>
		);
	}
}
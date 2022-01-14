import React, { Component } from 'react'
import github from './icons8/icons8-github.gif'
import instagram from './icons8/icons8-instagram.gif'
import linkedin from './icons8/icons8-linkedin-circled.gif'
import upwardArrow from './icons8/icons8-upward-arrow.gif'
import twitter from './icons8/icons8-twitter-circled.gif'

export default class Contact extends Component{
	constructor(){
		super();
		this.state={};
		};
		handleScroll(){
			window.scrollTo(0,0);

	};

	render(){

		return(
			<div className ="Contact-component">
				<section className="contact" id="contact">
				    <h2>Get In Touch With Me</h2>
				      <div className="contact-form-container">
				        <div className="contact-form">
				          <form action="https://formspree.io/f/moqrvgjj" method="POST">
				           <div className="form-control">
				              <label htmlFor="name">Name</label>
				                <input
				                  type="text"
				                  id="name"
				                  name="sender-name"
				                  placeholder="Enter Your Name"
				                  className="input-field"
				                  required
				                />
				            </div>
				            <div className="form-control">
				              <label htmlFor="email">Email</label>
				                <input
				                  type="email"
				                  id="email"
				                  name="sender-email"
				                  placeholder="Enter Your Email"
				                  className="input-field"
				                  required
				                />
				            </div>
				            <div className="form-control">
				              <label htmlFor="message">Message</label>
				                <textarea
				                  id="message"
				                  cols="60"
				                  rows="10"
				                  placeholder="Enter Your Message"
				                  name="message"
				                  className="input-field"
				                  required
				                ></textarea>
				            </div>
				            <input
				              type="submit"
				              value="Submit"
				              id="submit-btn"
				              className="submit-btn"
				            />
				          </form>
				        </div>
				      </div>
				</section>
				  <div className="socials">
					    <a href="https://twitter.com/" target="_blank" rel="noreferrer">
					      <img
					      src={twitter}
					      alt="Twitter"
					      loading="lazy"
					      className="socicon"
					    />
					    </a>
					    <a href="https://instagram.com/teddybob" target="_blank" rel="noreferrer">
					      <img
					        src={instagram}
					        alt="Instagram"
					        loading="lazy"
					        className="socicon"
					      />
					    </a>
					    <a href="https://linkedin.com/in/teddygallion" target="_blank" rel="noreferrer">
					      <img
					        src={linkedin}
					        alt="Linkedin"
					        loading="lazy"
					        className="socicon"
					      />
					    </a>
					    <a href="https://github.com/teddygallion" target="_blank" rel="noreferrer">
					      <img src={github} alt="Github" className="socicon"/>
					    </a>
					  </div>
					  <footer>
					      <p className="copy">&copy; Copyright 2022
					        Built with &#x2661; by
					        <a href="https://instagram.com/teddybob" target="_blank" rel="noreferrer"
					          >Teddy Gallion</a>
					      </p>
					  </footer>
					  <i className="scroll-up" id="scroll-up" onClick={ ()=> this.handleScroll()}>
					  <img
					    src={upwardArrow}
					    className="socion up-arrow"
					    alt="scroll-up"
					  />
					  </i>
					  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
					  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" ></script>
			</div>
			);
	}
}
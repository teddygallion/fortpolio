import React, {Component} from 'react';

export default class Nav extends Component{
	render(){
		return(
			<div className='Nav'>
				<nav>
				    <h1>Teddy Gallion</h1>
				      <ul className="navigation">
				        <li><a href="#about" className="nav-link">About</a></li>
				        <li><a href="#projects" className="nav-link">Projects</a></li>
				        <li><a href="#contact" className="nav-link">Contact</a></li>
				      </ul>
				    <button className="burger-menu" id="burger menu">
				      <ion-icon className="bars" name="menu-outline"></ion-icon>
				    </button>
				  </nav>
			</div>
		);
	}
}
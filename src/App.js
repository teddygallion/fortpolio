import React, { Component } from 'react'
import './App.css';
import Contact from './Contact.js'
import Bio from './Bio.js'
import Nav from './Nav.js'
import Projects from './Projects.js'

export default class App extends Component{
  render(){
    return(
      <div className="App"> 
        <Nav />
        <Bio />
        <Projects />
        <Contact />
      </div>
      );
  };
}



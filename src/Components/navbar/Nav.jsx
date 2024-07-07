import React, { useState } from 'react'
import "./nav.css"
import {Link} from 'react-scroll'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";  


export default function Nav() {
  const[sidenav,setSidenav]=useState('closenav')
  function hamburger() {
    setSidenav('sidenav') 
  }
  function close() {
    setSidenav('closenav') 
  }


  return (
   <>
   <div className="nav">
    <div className="leftnav">
      <img src="/Logo.png" alt="" />
      <p>Portfolio</p>
    </div>
    <div className={sidenav}>
    <ul>
      <div onClick={close} className="close">
    < IoClose />
    <hr />
    </div>
        <li><Link to="home" smooth={true} offset={200} duration={600}>Home</Link></li>
        <li><Link to="project" smooth={true} offset={200} duration={600}>Projects</Link></li>
        <li><Link to="resume" smooth={true} offset={200} duration={600}>Resume</Link></li>
        <li><Link to="about" smooth={true} offset={200} duration={600}>About</Link></li>
      </ul>
    </div>
    <div className="rightnav">
      <ul>
        <li><Link to="home" smooth={true} offset={200} duration={600}>Home</Link></li>
        <li><Link to="project" smooth={true} offset={200} duration={600}>Projects</Link></li>
        <li><Link to="resume" smooth={true} offset={200} duration={600}>Resume</Link></li>
        <li><Link to="about" smooth={true} offset={200} duration={600}>About</Link></li>
        <li onClick={hamburger} className='burger'><GiHamburgerMenu /></li>
      </ul>
    </div>
   </div>
   <hr />
   </>
  )
}

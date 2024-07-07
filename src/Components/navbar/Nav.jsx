import React from 'react'
import "./nav.css"
import {Link} from 'react-scroll'


export default function Nav() {



  return (
   <>
   <div className="nav">
    <div className="leftnav">
      <img src="/Logo.png" alt="" />
      <p>Portfolio</p>
    </div>
    <div className="rightnav">
      <ul>
        <li><Link to="home" smooth={true} offset={200} duration={600}>Home</Link></li>
        <li><Link to="project" smooth={true} offset={200} duration={600}>Projects</Link></li>
        <li><Link to="resume" smooth={true} offset={200} duration={600}>Resume</Link></li>
        <li><Link to="about" smooth={true} offset={200} duration={600}>About</Link></li>
      </ul>
    </div>
   </div>
   <hr />
   </>
  )
}

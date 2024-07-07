import React from 'react'
import "./about.css"
import { FaFacebook,FaLinkedin,FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import resume from '../../../public/Ankit-Resume.pdf'
export default function About() {
  
  return (
    <>
    <div id='about' className='about'>
        <h2>About Me</h2>
        <div className="aboutdetail">
        <h2>I am <span>Ankit Karmacharya</span></h2>
        <h3>Frontend Developer</h3>
        <p>
        I am a professional web developer specializing in frontend development, with expertise in building and maintaining websites. I have skills in responsive CSS designs, hover effects, and responsive CSS grid layouts. Currently, I'm focused on frontend development projects and eager to create intuitive user interfaces and seamless user experiences. </p>
        <p>Phone: <span>9868292332</span></p>
        <p>Email: <span>ankitkarmacharya18@gmail.com</span></p>
        <button ><a href={resume} download="resume">Download CV </a></button>
        <h3>Find me on</h3>
        <div className="apps">
          <a href="https://www.facebook.com/sup.ranc"><FaFacebook/></a>
          <a href="https://www.instagram.com/Sup_ranc_/"><AiFillInstagram/></a>
          <a href="https://www.linkedin.com/in/ankit-karmacharya-2935451a7/"><FaLinkedin/></a>
          <a href="https://github.com/Supranc18?tab=repositories"><FaGithub/></a>
        </div>
      </div>
    </div>
    <hr />
    </>

    
  )
}

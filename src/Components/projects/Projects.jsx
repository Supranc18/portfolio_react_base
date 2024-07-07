import React from 'react'
import "./project.css"
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <>
   
    <div className="mainproject" id='project' >
        <h2>My Projects</h2>
        <div className="containar">
        <div className="box">
            <div className="imgcontain">
            <img src="/weather.png" alt="" />
            </div>
            <div className="info">
            <h3>Weather App</h3>
            <a href=""><FaGithub/></a>
            </div>
            <p>This is a react project with api.This app display the current weather conditions for almost every location.</p>
        </div>
    
        
        </div>  
    </div>
    <hr />
    </>
  )
}

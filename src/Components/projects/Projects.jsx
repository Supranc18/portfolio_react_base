import React from 'react'
import "./project.css"
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <>
   
    <div className="mainproject" id='project' >
        <h2>My Projects</h2>
        <div className="containar">
       <a href="https://weather-app-with-api-blond.vercel.app/"><div className="box">
            <div className="imgcontain">
            <img src="/weather.png" alt="" />
            </div>
            <div className="info">
            <h3>Weather App</h3>
            <a href="https://github.com/Supranc18/portfolio_react_base"><FaGithub/></a>
            </div>
            <p>This is a react project with api.This app display the current weather conditions for almost every location.</p>
        </div>
        </a> 

        <a href="https://microsoft-home-demo.vercel.app/"><div className="box">
            <div className="imgcontain">
            <img src="/Microsoft demo.png" alt="" />
            </div>
            <div className="info">
            <h3>Microsoft Clone</h3>
            <a href="https://github.com/Supranc18/Microsoft-home-demo"><FaGithub/></a>
            </div>
            <p>This is a HTML and CSS project.This is a clone page of microsoft</p>
        </div>
        </a> 

        <a href="https://project-1-pi-nine.vercel.app/"><div className="box">
            <div className="imgcontain">
            <img src="/Ecommers.png" alt="" />
            </div>
            <div className="info">
            <h3>Ecommerce clone</h3>
            <a href="https://github.com/Supranc18/Project-1"><FaGithub/></a>
            </div>
            <p>This is a HTM,CSS and Javascript project. This is a ecommerce clone website of champion brand</p>
        </div>
        </a> 
    
        
        </div>  
    </div>
    <hr />
    </>
  )
}

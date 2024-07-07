import React from 'react'
import './fotter.css'
import { FaFacebook,FaLinkedin,FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <>
    <div className="footer">
        <div className="topfot">
            <div className="leftfoot">
        <img src="/Logo.png" alt="" />
        <h3>Ankit Karmacharya</h3>
        </div>
        <div className="apps">
          <a href="https://www.facebook.com/sup.ranc"><FaFacebook/></a>
          <a href="https://www.instagram.com/Sup_ranc_/"><AiFillInstagram/></a>
          <a href="https://www.linkedin.com/in/ankit-karmacharya-2935451a7/"><FaLinkedin/></a>
          <a href="https://github.com/Supranc18?tab=repositories"><FaGithub/></a>
        </div>
        </div>
        <hr />
        <div className="bottomfot">
            <p>© 2022. All rights reserved by Ankit Karmacharya</p>
        </div>
    </div>
    </>
  )
}

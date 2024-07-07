import React from "react";
import "./home.css";
import { FaFacebook,FaLinkedin,FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Professional coder", "Web debeloper.", "Frontend developer."],
    loop: {},
  });
  return (
    <>
      <div className="main" id="home">
        <div className="left">
          <p>Welcome to my Portfolio</p>
          <h1>HI!!</h1>
          <h2>
            I am <span className="color">Ankit Karmacharya</span>
          </h2>
          <h2>
            <span>a {text}</span>
            <span>
              <Cursor />
            </span>
          </h2>
          <p>I am a professional web developer specializ in building and maintaining websites. Specially skilled in frontend development. </p>
        </div>
        <div className="right">
          <img src="/background.png" alt="" />
        </div>
      </div>
      <div className="social">
        <h3>Find me on</h3>
        <div className="apps">
          <a href="https://www.facebook.com/sup.ranc"><FaFacebook/></a>
          <a href="https://www.instagram.com/Sup_ranc_/"><AiFillInstagram/></a>
          <a href="https://www.linkedin.com/in/ankit-karmacharya-2935451a7/"><FaLinkedin/></a>
          <a href="https://github.com/Supranc18?tab=repositories"><FaGithub/></a>
        </div>
      </div>
      <hr />
    </>
  );
}

import React, { useEffect, useState } from "react";
import "./resume.css";

export default function Resume() {
  const data = ["Education", "Professional Skills", "Experience"];

  const [resume, setResume] = useState();

  let education=(
  <>
    <div className="education">
        <h3>Education degree</h3>
        <div className="educationdetail">
            <h3>Mern Stack Developer</h3>
            <p>Mind Risers, Putalisadak, Nepal</p>
        </div>
          <div className="educationdetail">
                <h3>BSc (Hons) Computer System Engineering </h3>
                <p>ISMT college,Tinkune, Bagmati, Nepal</p>
              </div>
              <div className="educationdetail">
                <h3>Intermediate in Science</h3>
                <p>
                  Modern Public Higher Secondary School, Nepalgunj, Lumbini, Nepal
                </p>
              </div>
              <div className="educationdetail">
                <h3>SLC</h3>
                <p>West Zone English Medium High School, Banke, Lumbini, Nepal</p>
              </div>
            </div></>)

  useEffect(()=>{
   
    setResume(education)

  },[])

  

  function clickhandle(el) {
    if (el==="Professional Skills") {
      setResume(
        <>
        <div className="skill">
            <h2>Frontend Skills</h2>
            <div className="skillsname" style={{width:"85%"}}>
                <div className="space">
                    <p>React</p>
                    <p>50%</p>
                </div>
                <div className="skillamount" style={{ width: "50%" }}></div>
                <div className="space">
                    <p>JavaScript</p>
                    <p>65%</p>
                </div>
                <div className="skillamount" style={{ width: "65%" }}></div>
                <div className="space">
                    <p>HTML</p>
                    <p>95%</p>
                </div>
                <div className="skillamount" style={{ width: "95%" }}></div>
                <div className="space">
                    <p>CSS</p>
                    <p>82%</p>
                </div>
                <div className="skillamount" style={{width: "82%" }}></div>
                <div className="space">
                    <p>Bootstrap</p>
                    <p>70%</p>
                </div>
                <div className="skillamount" style={{ width: "70%" }}></div>
            </div>
        </div>
    </>
      );
    } else if (el==="Experience") {
      setResume(
      <>
      <div className="end">
        <div className="text">
        <h3>Experience</h3>
        
      <div className="experience">
            <h3>Data Analyst</h3>
            <p>Cloud factory, Kathmandu, Nepal-(Feb 2022 – Feb 2024)</p>
        </div>
        </div>
      </div>
     
      </>);
    }
    else if(el==="Education")
        setResume(education)
  }

  return (
    <>
      <div className="mainresume" id="resume">
        <div className="resume">
          <h2>My Reseume</h2>
          <div className="skill">
            <ul>
              {data.map((el, index) => {
                return (
                  <li key={index} onClick={() => clickhandle(el)}>
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="resumedata">{resume}</div>
        </div>
      </div>
      <hr />
    </>
  );
}

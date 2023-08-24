import React from 'react';
import { Link } from 'react-router-dom';
import './style/About.css'

function About() {
  const opentab = (tabName) => {
    // Implement your tab-switching logic here
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img className="imagee" src="/src/Zikho.png" alt="" />
            <a href="/">
              <button className="btn">Resume</button>
            </a>
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">
              About <span>M</span>e
            </h1>
            <p>
              I am a software developer with a strong passion for building
              innovative and user-friendly applications. My journey in software
              development began with a keen interest in problem-solving and
              technology. I have experience with HTML, CSS, and JavaScript, and
              I enjoy creating intuitive user interfaces using modern libraries
              and frameworks like React. During my academic journey and personal
              projects, I've had the opportunity to collaborate with diverse
              teams, which has sharpened my communication and teamwork skills.
              I am always eager to learn new technologies and keep up with the
              latest industry trends.
            </p>
            <div className="tab-titles">
              <p
                className="tab-links active-link"
                onClick={() => opentab('skills')}
              >
                Skills
              </p>
              <p
                className="tab-links"
                onClick={() => opentab('experience')}
              >
                Experience
              </p>
              <p
                className="tab-links"
                onClick={() => opentab('education')}
              >
                Education
              </p>
            </div>
            <div className="tab-contents active-tab" id="skills">
              <ul>
                <li><span>HTML</span></li>
                <li><span>CSS</span></li>
                <li><span>Javascript</span></li>
                <li><span>React</span></li>
              </ul>
            </div>
            <div className="tab-contents" id="experience">
              <ul>
                <li>
                  <span>JUL 2023 - current</span><br />
                  Junior Software Dev. Company: Younglings
                </li>
                <li>
                  <span>JAN 2023-JUN 2023</span><br />
                  System Developer. Company: Cpaciti
                </li>
              </ul>
            </div>
            <div className="tab-contents" id="education">
              <ul>
                <li>
                  <span>2016-2020</span><br />
                  NDip Information Technology. Institution: Walter Sisulu University
                </li>
                <li>
                  <span>2013-2015</span><br />
                  High School. School: St Patricks SSS
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

import React from 'react'
// import About from './About
import './style/Myhome.css'

export default function Myhome() {
  return (
    <div>
        <div className="header-text">
        <div className="div-text">
          <h1>Hello, <br />I am <span>Zikhona</span></h1>
          <button className="btnn"><a href="#projects">Portfolio</a></button>
        </div>
        <div className="image">
          <img src="/src/picture.png" alt="" />
        </div>
        
      </div>
      {/* <About /> */}
    </div>
  )
}

import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
      <header>
        <img src={require('../images/signature.png')} alt="" className='logo' />

        <ul className="navlist">
          <li><a href="#home" className="active"> Home</a></li>
          <li><a href="#about"> About </a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#skill"> Skills</a></li>
          <li><a href="#contact">Contact Me</a></li>
        </ul>

        <div className="bx bx-menu" id="menu-icon"></div>




      </header>
    </>
  )
}

export default Header
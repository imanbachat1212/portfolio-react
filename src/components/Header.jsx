import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    <header>
      <a href="#home" class="logo">Cod <span>e</span>r.</a>

      <ul class="navlist">
        <li><a href="#home" class="active"> Home</a></li>
        <li><a href="#about"> About </a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#skill"> Skills</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>

      <div class="bx bx-menu" id="menu-icon"></div>
    </header>
    </>
  )
}

export default Header
import React from 'react'
import'./Home.css'

const Home = () => {
  return (
   <>
   <section class="home" id="home" >
      <div class="home-text" data-aos="fade-up-right">
        <div class="slide" >
          <span class="one">Hello</span>
          <span class="two">I'm</span>
        </div>
        <h1 class="typing-demo">Iman Bachat .</h1>

        <h3>Full Stack Web <span> Developer. </span></h3>
        <p>I design and develop Web Apps, Websites, & Landing Pages</p>
        <div class="button" >
          <a href="#contact" class="btn"> Say Hello</a>
          <a href="#work" class="btn-2"
            ><span><i class="bx bx-play"></i></span> Watch My Work</a>
        </div>
      </div>
    </section>
   </>
  )
}

export default Home
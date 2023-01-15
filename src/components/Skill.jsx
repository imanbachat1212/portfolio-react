import React from 'react'
import './Skill.css'

const Skill = () => {
  return (
    <>
       <section class="skill" id="skill">
      <div class="main-text">
        <h2><span>My</span> Skills</h2>
      </div>
      
      <div class="skill-content"  data-aos-offset="500"
     data-aos-duration="500" >
      <div class="rows"  data-aos="fade-up" >
        <img src={require('../images/html5.png')} alt="" />
        <p>HTML 5</p>
      </div>
      <div class="rows"data-aos="fade-up">
        <img src={require('../images/css3.png')}alt=""/>
        <p>CSS 3</p>
      </div>
      <div class="rows" data-aos="fade-up">
        <img src={require('../images/javasript.png')} alt=""/>
        <p>JavaScript</p>
      </div>
      <div class="rows" data-aos="fade-up">
        <img src={require('../images/sass.png')}alt=""/>
        <p>SCSS</p>
      </div>
      <div class="rows" data-aos="fade-up">
        <img src={require('../images/react.png')} alt=""/>
        <p>ReactJS</p>
      </div>
      <div class="rows" data-aos="fade-up">
        <img src={require('../images/redux.png')} alt=""/>
        <p>Redux</p>
      </div>
      <div class="rows" data-aos="fade-up">
        <img src={require('../images/node.png')}alt=""/>
        <p>NodeJS</p>
      </div>
      <div class="rows" data-aos="fade-up">
        <img src={require('../images/mongo.png')} alt=""/>
        <p>MongoDB</p>
      </div>
      <div class="rows" data-aos="fade-up">
        <img src={require('../images/git.png')} alt=""/>
        <p>GIT</p>
      </div>
      </div>
    
    </section>
 </>
 
  )
}

export default Skill
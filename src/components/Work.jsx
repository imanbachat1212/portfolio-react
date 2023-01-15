import React from 'react'
import './Work.css'

const Work = () => {
  return (
   <>
    <section class="work" id="work">
      <div class="main-text">
        <p> My Works</p>
        <h2><span>Latest</span> work</h2>
      </div>
      <div class="work-content" data-aos="zoom-in">
          <div class="row">
            <img src={require('../images/project1.PNG')} alt=''/>
            <div class="layer">
              <h5>Proshop</h5>
              <a href="https://sage-squirrel-9e1f3e.netlify.app"><i class='bx bx-link-external' ></i></a>
            </div>
          </div>
      </div>
    </section>
   </>
  )
}

export default Work
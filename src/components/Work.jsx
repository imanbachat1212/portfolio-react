import React from 'react'
import './Work.css'

const Work = () => {
  return (
   <>
    <section className="work" id="work">
      <div className="main-text">
        <p> My Works</p>
        <h2><span>Latest</span> work</h2>
      </div>
      <div className="work-content" data-aos="zoom-in">
          <div className="row">
            <img src={require('../images/project1.PNG')} alt=''/>
            <div className="layer">
              <h5>Proshop</h5>
              <a href="https://sage-squirrel-9e1f3e.netlify.app"><i className='bx bx-link-external' ></i></a>
            </div>
          </div>
      </div>
    </section>
   </>
  )
}

export default Work
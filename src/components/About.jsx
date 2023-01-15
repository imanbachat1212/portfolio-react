import React from 'react'
import './About.css'

const About = () => {
  return (
   <>
   <section class="about" id="about" >
		<div class="main-text">
			<p>What I am Expert In</p>
			<h2>  Turning ideas into real life <br /><span>products</span> is my calling</h2>
		</div>

		<div class="about-content">
			<div class="box"  data-aos="flip-right">
				<div class="s-icons">
					<i class='bx bx-code-alt' ></i>
				</div>
				<h3>Web Development</h3>
				<p>the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
			</div>

      <div class="box"  data-aos="flip-right">
				<div class="s-icons">
					<i class='bx bx-mobile-alt' ></i>
				</div>
				<h3>Frontend Development</h3>
				<p>provide insights and data that can be used to create a better user experience for website visitors.</p>
			</div>

			<div class="box"  data-aos="flip-right">
				<div class="">
					<img src={require('../images/coding-1.png')} alt=''/>
				</div>
				<h3>Backend Development</h3>
				<p>Enjoy creative problem solving and getting exposure to multiple projects with NodeJs,Express & mongoDB.</p>
			</div>

      <div class="box"  data-aos="flip-right"> 
				<div class="s-icons">
					<img src={require('../images/api-1.png')} alt=''/>
				</div>
				<h3>MERN stack Development</h3>
				<p>Designed, developed and modified web Apps with MERN technologies.</p>
			</div>

		</div>
	</section>

 </>
  )
}

export default About
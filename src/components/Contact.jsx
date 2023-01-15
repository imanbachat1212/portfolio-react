import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <>
       <section class="contact" id="contact">
      <div class="contact-text">
        <h2>Contact <span>Me!</span></h2>
        <h4>If You Have Any Project In Your Mind.</h4>
        <p>
          I'm a Full stuck web developer - creating bold & brave interface
          design for companies all across the world.
        </p>
        <div class="list">
          <li><a href="#home">+96170256769</a></li>
          <li><a href="#home">iman.bachatt@gmail.com</a></li>
        </div>

        <div class="contact-icons">
          <a href="https://www.facebook.com/bachat"><i class="bx bxl-facebook"></i></a>
          <a href="https://www.linkedin.com"><i class="bx bxl-linkedin"></i></a>
          <a href="https://twitter.com"><i class="bx bxl-twitter"></i></a>
          <a href="https://github.com"><i class="bx bxl-github"></i></a>
        </div>
      </div>
      <div class="contact-form"  data-aos ="fade-left" data-aos-offset="500"
     data-aos-duration="500" >
        <form action="">
          <input type="name" placeholder="Your name" required />
          <input type="email" placeholder="Your Email Address" required />
          <input type="" placeholder="Your Mobile Number" required />
          <textarea
            name=""
            id=""
            cols="35"
            rows="10"
            placeholder="How Can I Help You "
            required
          ></textarea>
          <input type="submit" value="Send Message" class="submit" required />
        </form>
      </div>
    </section>
    </>
  )
}

export default Contact
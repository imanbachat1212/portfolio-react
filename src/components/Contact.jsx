import React ,{useRef} from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'



const Contact = () => {

  
 



  const form = useRef();
  // const theRef=useRef(null)

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm(
        "service_qebokbk",
        "template_ikr5xih",
        form.current,
        "SdQQqt_oC6lufuJrg"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  };

  return (
    <>
      <section className='contact' id='contact'>
        <div className='contact-text'>
          <h2>
            Contact <span>Me!</span>
          </h2>
          <h4>If You Have Any Project In Your Mind.</h4>
          <p>
            I'm a Full stuck web developer - creating bold & brave interface
            design for companies all across the world.
          </p>
          <div className='list'>
            <li>
              <a href="tel:+96170256769">+96170256769</a>
            </li>
            <li>
              <a href="mailto:iman.bachatt@gmail.com">iman.bachatt@gmail.com</a>
            </li>
          </div>

          <div className='contact-icons'>
            <a href='https://www.facebook.com/bachat'>
              <i className='bx bxl-facebook'></i>
            </a>
            <a href='https://www.linkedin.com/in/iman-bachat-65128b243/'>
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href='https://twitter.com'>
              <i className='bx bxl-twitter'></i>
            </a>
            <a href='https://github.com/imanbachat1212'>
              <i className='bx bxl-github'></i>
            </a>
          </div>
        </div>
        <div
          className='contact-form'
          data-aos='fade-left'
          data-aos-offset='500'
          data-aos-duration='500'
        >
          <form ref={form} onSubmit={sendEmail}>
            <input
              name="user_name"
              id='name'
              type='text'
              placeholder='Your name'
              required
            />
            <input
              type='email'
              id='email'
              name="user_email"
              placeholder='Your Email Address'
              required
            />
            <textarea
              id='message'
              name='message'
              cols='35'
              rows='10'
              placeholder='How Can I Help You '
              required
            ></textarea>
             <input type="submit" value="Send Message" className="submit"   required />
            
           
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact

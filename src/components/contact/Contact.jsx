import React from 'react'
import "./contact.css"
import {FiPhoneCall} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qwtj2iu', 'template_nmvf78d', form.current, 'uXKQeoUVA-7sndSr9')
    e.target.reset()
  };

  return (
    <section id='Contact'>
      <h5>Talk To Me</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
          <FiPhoneCall className='contact_option-icon'/>
            <h4>Phone</h4>
            <a href="tel:+201284993268">Call Me</a>
          </article>
          <article className='contact_option'>
          <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <a href="mailto:el.abdallah2020@gmail.com">Send a message</a>
          </article>
          <article className='contact_option'>
          <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <a href="whatsapp://send?text=Can we chat!&phone=+201284993268">Send a message</a>
          </article>
          <article className='contact_option'>
          <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <a href="http://m.me/abdallah.elsayed.52" target={'_blank'} rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* End Contact options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='user_name' placeholder='Full Name' required/>
          <input type="email" name='user_email' placeholder='Your Email' required/>
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' value="Send" className='btn btn-primary'>Send</button>
        </form>
      </div>
      </section>
  )
}

export default Contact
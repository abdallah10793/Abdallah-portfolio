import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import { GiSkills } from 'react-icons/gi'
import { RiUserSearchFill } from 'react-icons/ri'
import { ImFolderOpen } from 'react-icons/im'
import { FaLaughWink } from 'react-icons/fa'

const about = () => {
  return (
    <section id='about'>
      <h5>Who Am I</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About_Image" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <GiSkills className='about_icon' />
              <h5>Skills</h5>
              <small>MERNStack Developer</small>
            </article>

            <article className='about_card'>
              <RiUserSearchFill className='about_icon' />
              <h5>Clients</h5>
              <small>Wellcome <FaLaughWink className='smile' /></small>
            </article>

            <article className='about_card'>
              <ImFolderOpen className='about_icon' />
              <h5>Projects</h5>
              <small>MERNStack Projects</small>
            </article>

          </div>
          <p>Ambitious and self-motivated Front-End and MERN Stack developer with experience in building responsive Websites.
            and seeking new opportunities and challenges that will expand my skills.</p>
          <a href="#contact" className='btn btn-primary'>Hire me</a>

        </div>



      </div>
    </section>
  )
}

export default about
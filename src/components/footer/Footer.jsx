import React from 'react'
import "./footer.css"
import FooterLogo from '../../assets/footer-logo.png'
import { ImLinkedin2 } from 'react-icons/im'
import { BsGithub } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const footer = () => {
  return (
    <footer id='footer'>
      <a href="/" className='footer_logo'><img src={FooterLogo} alt="logo" /></a>

      <ul className="permalinks">
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testmonials">Reviews</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://github.com/abdallah10793" target={'_blank'} rel="noreferrer"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/abdallah-elsayed-2188b4104/" target={'_blank'} rel="noreferrer"><ImLinkedin2 /></a>
        <a href="https://www.facebook.com/abdallah.elsayed.52/" target={'_blank'} rel="noreferrer"><FaFacebookF /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Abdallah AE. All rights reseved.</small>
      </div>
    </footer>
  )
}

export default footer
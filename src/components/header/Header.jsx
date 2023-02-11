import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Abdallah Elsayed</h1>
        <h5 className="text-light">
          MERN Stack Developer
        </h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

          <a href="#Contact" className='scroll_down'><BsFillArrowDownCircleFill/></a>

      </div>
    </header>
  )
}

export default Header
import React from 'react'
import "./nav.css"
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { TbHeartHandshake } from 'react-icons/tb'
import { RiMessageLine } from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiceNav] = useState('#')

  return (
    <nav>
      <a href="#header" onClick={() => setActiceNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiceNav('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiceNav('experience')} className={activeNav === 'experience' ? 'active' : ''}><BiBook /></a>
      <a href="#service" onClick={() => setActiceNav('service')} className={activeNav === 'service' ? 'active' : ''}><TbHeartHandshake /></a>
      <a href="#Contact" onClick={() => setActiceNav('Contact')} className={activeNav === 'Contact' ? 'active' : ''}><RiMessageLine /></a>
    </nav>
  )
}

export default Nav
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BiPhoneCall} from 'react-icons/bi'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://github.com/abdallah10793" target={'_blank'} rel="noreferrer"><BsGithub/></a>
      <a href="https://www.linkedin.com/in/abdallah-elsayed-2188b4104/" target={'_blank'} rel="noreferrer"><BsLinkedin/></a>
      <a href="whatsapp://send?text=Can we chat!&phone=+201284993268"><BsWhatsapp/></a>
      <a href="tel:+201284993268"><BiPhoneCall/></a>



    </div>
  )
}

export default HeaderSocials
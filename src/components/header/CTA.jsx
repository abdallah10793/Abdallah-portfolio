import React from 'react'
import CV from '../../assets/cv.pdf'
import {BsDownload} from 'react-icons/bs'
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'><BsDownload/> CV</a>
      <a href="#Contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA
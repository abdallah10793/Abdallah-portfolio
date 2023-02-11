import React from 'react'
import "./service.css"
import { FaCheckCircle } from 'react-icons/fa'

const services = () => {
  return (
    <section id='service'>
      <h5>What I Can Do</h5>
      <h2>Services</h2>

      <div className="container services_container">

        <article className='service'>
          <div className="service_head">
            <h3>Graphic Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheckCircle className='service_icon' />
              <p> Photoshop Photo editing.Photoshop Photo editing.</p>
            </li>
            <li>
              <FaCheckCircle className='service_icon' />
              <p>Print design: flyers, posters, brochures and business cards.</p>
            </li>
            <li>
              <FaCheckCircle className='service_icon' />
              <p>Social Media designs using Photoshop and Illistrator.</p>
            </li>
            <li>
              <FaCheckCircle className='service_icon' />
              <p>Logo Designs Using Photoshop or Illistrator.</p>
            </li>
            <li>
              <FaCheckCircle className='service_icon' />
              <p>Lightroom Photo Editing for photographers.</p>
            </li>
          </ul>
        </article>
        {/* end of graphic design */}

        <article className='service'>
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheckCircle className='service_icon' />
              <p>Turn your idea into a high quality web based solution.</p>
            </li>
            <li>
              <FaCheckCircle className='service_icon' />
              <p>Make Your Website exactly the way you envisioned.</p>
            </li>
            <li>
              <FaCheckCircle className='service_icon' />
              <p>Can turn any designed template into responsive code.</p>
            </li>
            <li>
              <FaCheckCircle className='service_icon' />
              <p>Implement any design idea and make sure all interface elements work properly.</p>
            </li>
            <li>
              <FaCheckCircle className='service_icon' />
              <p>Working with one of most used JS Framework (react).</p>
            </li>
          </ul>
        </article>
        {/* end of Web Development */}

        <article className='service'>
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <FaCheckCircle className='service_icon' />
              <p>Help any idea come into being with the latest tools.</p>
            </li>
            <li>
              <FaCheckCircle className='service_icon' />
              <p>Timely delivery of your product without delay.</p>
            </li>
            <li>
              <FaCheckCircle className='service_icon' />
              <p>High quality services of your product as you like.</p>
            </li>
            <li>
              <FaCheckCircle className='service_icon' />
              <p>Design scalable websites and web platforms.</p>
            </li>
            <li>
              <FaCheckCircle className='service_icon' />
              <p>Fast, Reliable, Responsive and Interactive.</p>
            </li>
          </ul>
        </article>
        {/* end of UI/UX */}

      </div>
    </section>
  )
}

export default services
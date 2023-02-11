import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const data = [
  {
    id:1,
    image: IMG1,
    title: 'Towing service wensh-inkaz',
    github: 'https://github.com/abdallah10793/wensh-inkaz',
    review:'https://abdallah10793.github.io/wensh-inkaz/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Rode Store Ecommerce',
    github: 'https://github.com/abdallah10793/Rode-store',
    review:'https://abdallah10793.github.io/Rode-store/'
  },
  {
    id:3,
    image: IMG3,
    title: 'BMI Calculator',
    github: 'https://github.com/abdallah10793/Bmi-calculator',
    review:'https://abdallah10793.github.io/Bmi-calculator/'
  },
  {
    id:4,
    image: IMG4,
    title: 'AKE Tuning car chip remaping services',
    github: '',
    review:''
  },
  {
    id:4,
    image: IMG5,
    title: 'Tourism Travel Services',
    github: '',
    review:''
  },
  {
    id:1,
    image: IMG6,
    title: 'MERN Articles App',
    github: '',
    review:''
  },
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
      {
        data.map(({id, image, title, github, review}) => {
          return(
            <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3> 
            <div className='portfolio_item-cta'>
            <a target="_blank" href={github} rel="noreferrer" className='btn'>Github</a>
            <a target="_blank" href={review} rel="noreferrer" className='btn btn-primary'>Review</a>
            </div>
          </article>
          )
          
        })
      }
      

      </div>
    </section>
  )
}

export default portfolio
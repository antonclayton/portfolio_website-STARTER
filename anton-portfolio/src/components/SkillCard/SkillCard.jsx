import React from 'react'
import './SkillCard.css'

const SkillCard = ({ name, image }) => {
  return (
    <div className='portfolio__skillcard'>
      <p>{name}</p>

      <div className="portfolio__skillcard-image">
        <img src={image} alt="skill picture"/>
      </div>
    </div>
  )
}

export default SkillCard
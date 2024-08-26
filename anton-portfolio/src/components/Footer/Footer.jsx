import React from 'react'
import './Footer.css';
import { FaGithub } from 'react-icons/fa'

const Footer = () => {

  const handleGithubClick = () => {
    window.open("https://github.com/antonclayton", "_blank");
  }

  return (
    <div className="portfolio__footer">
      <div className="portfolio__footer-container">
        <div className='portfolio__footer-container_icon'>
          <FaGithub fontSize={38} onClick={handleGithubClick}/>
        </div>

        <div className="portfolio__footer-container_copyright">
          <p>Anton Clayton ©2024</p>
        </div>

      </div>
    </div>
  )
}

export default Footer
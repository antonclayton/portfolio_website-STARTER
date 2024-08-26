import React from 'react'
import './Contact.css';

import { SectionTitle } from '../../components'

const Contact = () => {
  return (
    <div className='portfolio__contact section__padding' id="contact">
      <SectionTitle header="Contact" />

      <div className="portfolio__contact-container">
        <p className="p__opensans">Unfortunately, I currently lack the necessary backend skills to implement a contact form. </p>
        <br/>
        <p className="p__opensans">Please contact me at anton.clayton@gmail.com!</p>

        {/* <div className="portfolio__contact-container_box">
          <input className="portfolio__contact-container_name" placeholder="Name" />
        </div>

        <div className="portfolio__contact-container_box">
          <input className="portfolio__contact-container_email" placeholder="Email" />
        </div>

        <div className="portfolio__contact-container_box">
          <input className="portfolio__contact-container_message" placeholder="Message" />
        </div>

        <div className="portfolio__contact-container_submit">
          <button className="contact__button">Submit</button>
        </div> */}

      </div>
    </div>
  )
}

export default Contact
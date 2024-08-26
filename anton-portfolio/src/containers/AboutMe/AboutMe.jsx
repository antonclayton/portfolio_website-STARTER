import React from 'react'
import './AboutMe.css'

import { images } from '../../constants/images';

const AboutMe = () => {
    return (
        <div className="portfolio__about section__padding scroll__margin" id="about">
            <div className='portfolio__about-image'>
                <img src={images.anton} alt="Anton Picture" />
            </div>

            <div className="portfolio__about-text">
                <h1 className="h1__opensans">Welcome!</h1>
                <p className='p__opensans'>I'm Anton, a junior at San Jose State University (SJSU), majoring in computer science.
                    Currently, I'm diving deep into front-end development through React and JavaScript.
                    As I continue to deepen my expertise in front-end development, 
                    I am hoping to broaden my skills and transition into full-stack development.
                </p>

                <div className="portfolio__about-text_buttons">
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="p__opensans">Download CV</a>
                    <a href="#contact" className="p__opensans">Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
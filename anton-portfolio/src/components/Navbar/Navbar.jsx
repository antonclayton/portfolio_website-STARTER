import React from 'react';
import './Navbar.css';

import { useState, useEffect } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdCancel } from "react-icons/md";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1150) { //reset the hamburger menu toggle to false because window has resized
        setToggleMenu(false);
      }
    }

    window.addEventListener('resize', handleResize); //call handleResize function on "resize"

    return () => {
      window.removeEventListener('resize', handleResize);   //clean up function for resize event listener
    };

  }, []);

  return (
    <nav className="portfolio__navbar">

      <div className="portfolio__navbar-logo">
        <a href="#">Anton Clayton</a>
      </div>

      <ul className="portfolio__navbar-links">
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#projects">Projects</a></li>
        <li className="p__opensans"><a href="#skills">Skills</a></li>
        <li className="contact__button"><a href="#contact">Contact</a></li>
      </ul>


      <div className="portfolio__navbar-smallscreen">
        <GiHamburgerMenu className="portfolio__navbar-smallscreen_hamburger" color="#FDFFF7" fontSize={35} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdCancel color="#FDFFF7" fontSize={35} className="overlay__close" onClick={() => { setToggleMenu(false) }} />
            <ul className="portfolio__navbar-smallscreen_links">
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#about">About</a></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#projects">Projects</a></li>
              <li className="p__opensans" onClick={() => setToggleMenu(false)}><a href="#skills">Skills</a></li>
              <li className="contact__button" onClick={() => setToggleMenu(false)}><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
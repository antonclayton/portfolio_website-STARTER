import React from 'react'
import './ProjectCard.css'
import { FaGithub } from 'react-icons/fa';

import { images } from '../../constants/images'

const ProjectCard = ({ title, image, description, GitHubLink }) => {

    const handleGitHubClick = () => {
        window.open(GitHubLink, '_blank');
    }
    return (
        <div className="portfolio__project-projectcard">
            <div className="portfolio__project-projectcard_title">
                <h1>{title}</h1>
            </div>

            <div className="portfolio__project-projectcard_image">
                <img src={image} alt="project image" />
            </div>

            <div className="portfolio__project-projectcard_description">
                <div className='portfolio__project-projectcard_text'>
                    <p className="p__opensans">{description}</p>
                </div>

                <div className="portfolio__project-projectcard_icon">
                    <FaGithub fontSize={34} className="projectcard__icon" style={{cursor: 'pointer'}} onClick={handleGitHubClick}/>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
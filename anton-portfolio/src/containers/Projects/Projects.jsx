import React from 'react'
import './Projects.css';
import { ProjectCard, SectionTitle } from '../../components'
import { images } from '../../constants/images';

const Projects = () => {
    return (
        <div className="portfolio__projects section__padding scroll__margin" id="projects">
            <SectionTitle header="Projects"/>

            <div className="portfolio__projects-container">
                <div className="portfolio__projects-card">
                    <ProjectCard title="Pokemon Wiki" image={images.pokemon} description="React" GitHubLink="https://github.com/antonclayton/Pokemon-Wiki"/>
                </div>
                <div className="portfolio__projects-card">
                    <ProjectCard title="Restaurant Website" image={images.restaurant} description="React" GitHubLink="https://github.com/antonclayton/Restaurant-Website"/>
                </div>
                <div className="portfolio__projects-card">
                    <ProjectCard title="GPT-3 Website" image={images.gpt3} description="React" GitHubLink="https://github.com/antonclayton/GPT3-website"/>
                </div>
                {/* <div className="portfolio__projects-card">
                    <ProjectCard title="johnson4" image="" description="React, JS, CSS" />
                </div> */}
            </div>

        </div>
    )
}

export default Projects
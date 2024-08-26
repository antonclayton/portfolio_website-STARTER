import React from 'react'
import './Skills.css';

import { SkillCard, SectionTitle } from '../../components';
import { images } from '../../constants/images'

const Skills = () => {
    return (
        <div className='portfolio__skills section__padding' id="skills">
            <SectionTitle header="Skills" />

            <div className='portfolio__skills-cardcontainer'>
                <div className="portfolio__skills-cardcontainer_card">
                    <SkillCard name="React" image={images.reactIcon} />
                </div>

                <div className='portfolio__skills-cardcontainer_card'>
                    <SkillCard name="JavaScript" image={images.JSIcon} />
                </div>

                <div className='portfolio__skills-cardcontainer_card'>
                    <SkillCard name="CSS" image={images.CSSIcon} />
                </div>

                <div className='portfolio__skills-cardcontainer_card'>
                    <SkillCard name="HTML" image={images.HTMLIcon} />
                </div>

                <div className='portfolio__skills-cardcontainer_card'>
                    <SkillCard name="Java" image={images.JavaIcon} />
                </div>
            </div>
        </div>
    )
}

export default Skills
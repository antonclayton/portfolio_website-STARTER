import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({ header }) => {
    return (
        <div className="portfolio__sectionTitle">
            <h1>{header}</h1>
            <span></span>
        </div>
    )
}

export default SectionTitle
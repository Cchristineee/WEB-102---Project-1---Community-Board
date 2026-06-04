import React from "react";
import './Card.css'

const Card = ({ image, company, title, location }) => {
    return (
        <div className="Card"> 
            {image && <img className="card-image" src={image} alt={`${company} logo`} />}
            <h2 className="company-name">{company}</h2>
            <h3 className="job-title">{title}</h3>
            <h4 className="job-description">{location}</h4>

            <button className="Learn-more-button">Learn More</button>
        </div>
    )
}

export default Card


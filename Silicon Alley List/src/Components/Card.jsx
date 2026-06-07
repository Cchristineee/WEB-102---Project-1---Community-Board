import React from "react";
import './Card.css'

const Card = ({ image, company, title, location, link }) => {
        return (
                <div className="Card"> 
                        {image && <img className="card-image" src={image} alt={`${company} logo`} />}
                        <div className="card-body">
                            <h2 className="company-name">{company}</h2>
                            <h3 className="job-title">{title}</h3>
                            <h4 className="location">{location}</h4>
                        </div>
                        {link ? (
                            <a className="Learn-more-button" href={link}>Learn More</a>
                        ) : (
                            <button className="Learn-more-button">Learn More</button>
                        )}
                </div>
        )
}

export default Card


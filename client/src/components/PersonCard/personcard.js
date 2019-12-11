import React from 'react';
import { Link } from 'react-router-dom';
import "./PersonCard.css";
import mom from "../Assets/Images/Mom.png"

// Function based React Component
const PersonCard = props => {
  return(
    <div className="PersonCard">
      <img className="image" img src={mom} />
      <div className="name">{props.name}</div>
        <div className="location">{props.location}</div>
        <div className="interests">
          {props.interests.map(interests => (
              <Link className="interests-links" href={interests.url}>
                #{interests.interests}
              </Link>
            ))}
      </div>
    </div>
  )};

export default PersonCard;
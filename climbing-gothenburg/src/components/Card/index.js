import React from "react";
import "./Card.css";

const Card = (props) => {
  let locationString = "";
  for (let i = 3; i < props.locations.length; i++) {
    if (i === props.locations.length - 1) {
      locationString = `${locationString}${props.locations[i]}`;
    } else {
      locationString = `${locationString}${props.locations[i]} -  `;
    }
  }
  return (
    <div className="card">
      {props.img !== "" ? <img src={props.img} alt={props.name} /> : null}
      <h2>{props.name}</h2>
      <div className="card-text-container">
        <p>Location: {locationString}</p>
        <p>Type: {props.type}</p>
        <p>Rating: {props.rating}</p>
      </div>
    </div>
  );
};

export default Card;

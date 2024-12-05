import React from "react";
import "./Card.css";
import { AiOutlineShareAlt } from "react-icons/ai";

const Card = (props) => {
  return (
    <div className="card">
      <div className="picture">
        <img src={props.image} alt={props.title} />
      </div>

      <div className="card__details">
        <div className="card__top">
          <h2 className="title">{props.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;

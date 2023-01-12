import React from "react";
import "./Cards.css";

const Cards = ({number,text,color,icon}) => {
  return (
    <div className="cards">
      <div className="card__single" style={{background:color}}>
        <div className="card__single--info">
          <span className="card__info--numbers">{number}</span>
          <span className="card__info--title">{text}</span>
        </div>
        <div className="card__single--icon">
        {/* <i className="fa-solid fa-dumbbell fa-2xl myIcon"></i> */}
        {icon}
        </div>
      </div>
    </div>
  );
};

export default Cards;

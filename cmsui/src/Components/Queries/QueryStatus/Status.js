import React from "react";
import './Status.css'

const Status = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <div className="overlay">
      <div className="userstatus__conatiner">
        <div className="userstatus__close" onClick={onClose}>
          X
        </div>
        <div className="user__details">
          <div className="top">
            <div className="top__element--left">
                <label htmlFor="name">Name:</label>
                <span className="element__text">Tarun Kumar</span>
            </div>
            <div className="top__element--right">
            <label htmlFor="name">User id:</label>
                <span className="element__text">2348</span>
            </div>
          </div>

          <div className="middle">
                <label htmlFor="phone">Phone Number :</label>
                <span className="element__text">Tarun Kumar</span>
          </div>

          <div className="bottom">
            <div className="bottom__element--left">
                <label htmlFor="name">Email :</label>
                <span className="element__text">tarunkumar@hotmail.com</span>
            </div>
            <div className="bottom__element--right">
            <label htmlFor="name">Gender :</label>
                <span className="element__text">Male</span>
            </div>
          </div>
        </div>
        <div className="user__query">
          <label htmlFor="Query">Query: </label>
          <span>
            Amet minim mollit non deserunt ullamcoest sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.....
          </span>
        </div>
        <div className="user__actions--btns">
          <button type="button" className="user__query--btns process">
            In Process
          </button>
          <button type="button" className="user__query--btns submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Status;

import React from "react";

const Status = () => {
  return (
    <div className="userstatus__conatiner">
      <div className="user__details">
        <div className="top"></div>
        <div className="middle"></div>
        <div className="bottom"></div>
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
        <button type="button" className="user__query--btns process">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Status;

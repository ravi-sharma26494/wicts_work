import React, { useState } from "react";
import Status from "./QueryStatus/Status";
import './UserSection.css'


const UserSection = () => {
    const [show, setShow] = useState(false);
  return (
    <>
    <div className="usersection__conatiner">
      <div className="usersection__items--conatiner">
        <div className="usersection__items--top">
          <div className="usersection__user--details">
            <label htmlfor="name">Name: </label>
            <span className="usersection__name">Tarun Kumar</span>
          </div>
          <div className="usersection__date">
            <label htmlfor="date">Date & Time : </label>
            <span className="usersection__date">8-12-2022, 10:30</span>
          </div>
        </div>
        <div className="usersection__items--bottom">
          <div className="bottom__query--section">
            <label htmlfor="queries">Query: </label>
            <span>
              Amet minim mollit non deserunt ullamcoest sit aliqua dolor do amet
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat sunt nostrud amet.....
            </span>
          </div>
          <div className="bottom__btns">
            <button type="button" className="query__buttons tag">Tag</button>
            <button type="button" className="query__buttons status" onClick={()=>{
                    setShow(true);
                      
                    }}>Status</button>
          </div>
        </div>
      </div>
    </div>

  {/* Status Overlay Component */}
  <Status show={show}  onClose = {()=>setShow(false)}/>
    </>
  );
};

export default UserSection;

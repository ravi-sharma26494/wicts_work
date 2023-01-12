import React from "react";
import Cards from "../Cards/Cards";
import Charts from "../Charts/Charts";
import "./Analytics.css";

const Analytics = () => {
  return (
    <>
      <div className="analytics__main--container">
        <div className="analytics__cards--container">
          <Cards
            number={48}
            text={"Total Gym"}
            color={"#cec5ff"}
            icon={
              <i
                className="fa-solid fa-dumbbell fa-2xl myIcon"
                style={{ color: "#cec5ff" }}
              ></i>
            }
          />
          <Cards
            number={63}
            text={"Total Users"}
            color={"#73D3C5"}
            icon={
              <i
                class="fa-solid fa-users fa-2xl myIcon"
                style={{ color: "#73D3C5" }}
              ></i>
            }
          />
          <Cards
            number={48}
            text={"Average Day Booking"}
            color={"#EEB7A2"}
            icon={
              <i
                className="fa-solid fa-calendar-days fa-2xl myIcon"
                style={{ color: "#EEB7A2" }}
              ></i>
            }
          />
        </div>
        <div className="analytics__charts--container">
        <Charts />
        </div>
      </div>
      
    </>
  );
};

export default Analytics;

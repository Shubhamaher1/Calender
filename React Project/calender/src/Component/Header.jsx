import React, { useState } from "react";
import moment from "moment";

function Header({ setMonth, setYearAux, year, mo }) {
  const months = moment.months();
  const [Display, setDisplay] = useState("none");
  console.log("header");

  return (
    <div className="header">
      <h1 id="heading">Calendar</h1>
      <div className="header--sub">
        <select
          id="month"
          onChange={(e) => setMonth(months.indexOf(e.target.value))}
          value={months[mo]}
        >
          {months.map((month, i) => {
            return (
              <option value={month} key={i}>
                {month}
              </option>
            );
          })}
        </select>
        <div className="year--">
          <input
            id="year-text-box"
            type="text"
            style={{ display: Display }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                setDisplay("none");
                return setYearAux(e.target.value);
              }
            }}
          ></input>
          <span
            id="year"
            onClick={(e) => {
              if (e.detail == 2) setDisplay("inline");
            }}
          >
            {year}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Header;
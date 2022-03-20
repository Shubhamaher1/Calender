import React, { useState, useEffect } from "react";
import moment from "moment";

 function Body({ monthNo, yearNo }) {
  console.log("body");

 let colors = ['red','blue','orange'];

  // console.log(monthNo)
  
 

  let date = moment();

  const testm = moment(date).set("month", monthNo);
  const testy = moment(date).set({ year: yearNo, month: monthNo });

  if (date.format("YYYY") != testy.format("YYYY")) date = testy;

  if (date.format("M") != testm.format("M")) date  = testm;

  let firstDay = moment(date).startOf("month").format("d");
  const addF = Number(firstDay);

  // I am considering a table of 42 days. blanks contains all the blank spaces before month starts and blanke contains all the empty cells affter a month ends.
  let blanks = [];
  for (let i = 1; i <= firstDay; i++) {
    blanks.push(
      <td id={`cell${i}`} key={i}>
        {""}
      </td>
    );
  }
  let dayofmonth = date.daysInMonth();
  let daysInMonth = [];
  const today = moment();

  // console.log(today.date());

  for (let d = 1; d <= dayofmonth; d++) {
    daysInMonth.push(
        today.date() == d  &&
        date.format("M") == today.format("M") &&
        date.format("YYYY") == today.format("YYYY") ? (
        <td id={`today`} key={d + addF}>
          {d}
        </td>
      ) : (
        <td id={`cell${d + addF}`} key={d + addF}>
          {d}
        </td>
      )
    );
  }

  let blanke = [];  // 
  for (let i = dayofmonth + addF + 1; i <= 42; i++) {
    blanke.push(
      <td id={`cell${i}`} key={i}>
        {""}
      </td>
    );
  }

  let totalSlots = [...blanks, ...daysInMonth, ...blanke];
  let rows = [];
  let cells = [];

  // console.log(totalSlots);

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) {
      rows.push(cells);
    }
  });

  return (
    <table id="table">
      <thead>
        <tr>
          {moment.weekdaysShort().map((day, i) => (
            <td key={100 + i}  >{day}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((d, i) => {
          return i !== 0 ? <tr key={1000 + i} >{d}</tr> : null;
        })}
      </tbody>
    </table>
  );
}
export default Body;
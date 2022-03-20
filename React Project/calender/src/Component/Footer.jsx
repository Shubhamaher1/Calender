import React, { useState } from "react";

function Footer({
  monthMinusOne,
  monthPlusOne,
  yearMinusOne,
  yearPlusOne
}) {
  console.log("Footer");
  return (
    <div className="footer">
      <button id="previous-year" onClick={yearMinusOne}>
        Previous Year
      </button>
      <button id="previous-month" onClick={monthMinusOne}>
        Previous Month
      </button>
      <button id="next-month" onClick={monthPlusOne}>
        Next Month
      </button>
      <button id="next-year" onClick={yearPlusOne}>
        Next Year
      </button>
    </div>
  );
}
export default Footer;
import React from "react";

function Title({ date, decDate, incDate }) {
  const arrowStyle = {
    cursor: "pointer"
  };
  return (
    <div className="titlebar">
      <h1>
        <span style={arrowStyle} onClick={decDate}>⬅️ </span>
        {date}
        <span style={arrowStyle} onClick={incDate}> ➡️</span>
      </h1>
    </div>
  );
}

export default Title;
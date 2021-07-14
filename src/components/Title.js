import React from "react";

function Title({ date, decDate }) {
  const arrowStyle = {
    cursor: "pointer"
  };
  return (
    <div className="titlebar">
      <h1>
        <span style={arrowStyle} onClick={decDate}>⬅️ </span>
        {date}
        <span style={arrowStyle}> ➡️</span>
      </h1>
    </div>
  );
}

export default Title;
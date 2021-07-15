import React from "react";
import styled from "styled-components";

const Arrow = styled.span`
  cursor: pointer;
`;

const LeftArrowEmoji = () => <span role="img" aria-label="previous day">⬅️</span>
const RightArrowEmoji = () => <span role="img" aria-label="next day">➡️</span>

function Title({ date, decDate, incDate }) {
  return (
    <div className="titlebar">
      <h1>
        <Arrow onClick={decDate}><LeftArrowEmoji /> </Arrow>
        {date}
        <Arrow onClick={incDate}> <RightArrowEmoji /></Arrow>
      </h1>
    </div>
  );
}

export default Title;
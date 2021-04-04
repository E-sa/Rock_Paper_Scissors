import React from "react";
import "../styles/style.scss";

function ComputerMove({ randomNum }) {
  const options = [
    ["rock", 1],
    ["paper", 2],
    ["sci", 3],
  ];

  return (
    <div className="computerMove">
      {options.map((res, index) => {
        return (
          <div
            key={index}
            className={`${res[0]}-grey`}
            id={randomNum === res[1] ? "move-animation2" : ""}
            data-value={res[0]}
          >
            <img
              alt={res[0]}
              src={require(`../images/icon-${res[0]}.svg`)}
            ></img>
          </div>
        );
      })}
    </div>
  );
}

export default ComputerMove;

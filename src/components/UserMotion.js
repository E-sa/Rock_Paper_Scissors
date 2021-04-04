import React from "react";
import "../styles/style.scss";

const options = ["rock", "paper", "sci"];

function UserMotion({ whatUserHasChose }) {
  return (
    <div className="game box ">
      {options.map((res, index) => {
        return (
          <div
            key={index}
            className={res}
            id={whatUserHasChose === res ? "move-animation" : "none"}
            data-value={res}
          >
            <img alt={res} src={require(`../images/icon-${res}.svg`)}></img>
          </div>
        );
      })}
    </div>
  );
}

export default UserMotion;

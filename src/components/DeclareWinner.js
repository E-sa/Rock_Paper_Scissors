import React from "react";
import "../styles/style.scss";

function DeclareWinner({ isEven, isLose, isWin }) {
  return (
    <div>
      {isWin && <div id="isWin">YOU WIN :)</div>}
      {isLose && <div id="isWin">YOU LOSE :(</div>}
      {isEven && <div id="isWin">ITS EVEN :|</div>}
    </div>
  );
}

export default DeclareWinner;

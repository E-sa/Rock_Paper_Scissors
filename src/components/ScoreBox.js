import React from "react";
import "../styles/style.scss";



function ScoreBox({score}){
  return(
    <div>
    <div className="scoreBox d-flex">
      <h1 className="mr-auto">
        ROCK <br /> PAPER <br /> SCISSORS
      </h1>
      <div>
        <p>score</p>
        <h2>{score}</h2>
      </div>
    </div>

  </div>
  )
}

export default ScoreBox;

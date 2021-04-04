import React from "react";
import "../styles/style.scss";

import Rules from "./Rules.js";
import UserChose from "./UserOptions";
import ZoomMassege from "./zoom-Massege";
import UserMotion from "./UserMotion";
import ComputerMove from "./computerMove";
import ScoreBox from "./ScoreBox";
import DeclareWinner from "./DeclareWinner";
import calculate from "./Calculate";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      userChoice: "",
      randomNum: "",
      calculate: 0,
      isWin: false,
      isLose: false,
      isEven: false,
    };
  }

  userchose = (chose) => {
    // 1.this random number is the computer move (1 = rock ,....)
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    this.setState({
      userChoice: chose,
      randomNum: randomNumber,
    });

    //2.now that we know user and computer move, the score will be calculated by calculate function 
    let calculate_res = calculate(randomNumber, chose)
    
    if(calculate_res==="win"){
      this.setState((prevState) => {
        return { calculate: prevState.calculate + 1, isWin: true };
      });
    }
    else if(calculate_res==="even"){
      this.setState({ isEven: true });
    }
    else if(calculate_res==="lose"){
      this.setState({ isLose: true });
    }


    // after 2sec everything resets
    setTimeout(() => {
      this.setState({
        userChoice: "",
        randomNum: "",
        isWin: false,
        isLose: false,
        isEven: false,
      });
    }, 2000);
  };


  render() {
    return (
      <div className="App">
        {/* 1. user choose one of the three options and we save it here in "userchose" */}
        <UserChose onChose={this.userchose} />

        {/* 2. now we want to show what user has chose by motion */}
        <UserMotion whatUserHasChose={this.state.userChoice} />

        {/* 3. also we show the user what the computer has chose with motion*/}
        <ComputerMove randomNum={this.state.randomNum} />

        {/* 4.score box component */}
        <ScoreBox score={this.state.calculate} />

        {/* 5.win or loose massege  */}
        <DeclareWinner
          isWin={this.state.isWin}
          isLose={this.state.isLose}
          isEven={this.state.isEven}
        />

        <Rules />

        <ZoomMassege />
      </div>
    );
  }
}

export default App;

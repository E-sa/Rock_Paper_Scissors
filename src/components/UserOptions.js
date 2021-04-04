import React from "react";
import "../styles/style.scss";

const options = ["rock", "paper", "sci"];

class UserMove extends React.Component {
  constructor() {
    super();
    this.state = {
      userChose_STH_nowHide: false,
    };
  }

  //onCLick function on 3 options
  selected = (e) => {
    // 1.weather user clicked the hand shape or the circle result will be sent to the parent
    if (e.target.dataset.value) {
      this.props.onChose(e.target.dataset.value);
    }
    if (e.target.alt) {
      this.props.onChose(e.target.alt);
    }

    //2.it hides the 3 option
    this.setState({
      userChose_STH_nowHide: true,
    });

    //3.options will be reappear after 2sec
    setTimeout(() => {
      this.setState({
        userChose_STH_nowHide: false,
      });
    }, 2000);
  };

  render() {
    return (
      <div className="gameBox">
        <div className="user-options">
          {options.map((res, index) => {
            return (
              <div
                key={index}
                className={res}
                data-value={res}
                id={this.state.userChose_STH_nowHide ? "none" : ""}
                onClick={this.selected}
              >
                <img alt={res} src={require(`../images/icon-${res}.svg`)}></img>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserMove;

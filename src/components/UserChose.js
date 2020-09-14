import React from 'react';
import '../styles/style.scss';


import ComputerMove from './computerMove';
import ScoreBox from './ScoreBox';
import UserMotion from './UserMotion';


class UserMove extends React.Component{
    constructor() {
        super();
        this.state = {
            onlyChooseOne: true,
            isPaper: false,
            isRock: false,
            isSci: false,
            randomNumber:'',
            userChoice:'',
            round:0
        };
    
      }



    selected = (e) => {

        const onlyChooseOne = this.state.onlyChooseOne
        const value = e.target.dataset.value;
        const alt = e.target.alt;


        if(onlyChooseOne && (value==="rock" || alt === "rock")){
            this.setState(
                prevState =>{
                    return{
                        isRock: true,
                        onlyChooseOne:false,
                        userChoice:"rock",
                        round : prevState.round+1
                    }})

        }

        else if (onlyChooseOne && (value==="paper" || alt === "paper")){
            this.setState(
                prevState =>{
                    return{
                        isPaper: true,
                        onlyChooseOne:false,
                        userChoice:"paper",
                        round : prevState.round+1
                    }})
        }

        else if(onlyChooseOne && (value==="sci" || alt === "sci")){
            this.setState(
                prevState =>{
                    return{
                        isSci: true,
                        onlyChooseOne:false,
                        userChoice:"sci",
                        round : prevState.round+1
                    }})
        }



        const randomNumber = Math.floor(Math.random()*3)+1;
        this.setState({randomNumber: randomNumber})

        setTimeout(() => {
            this.setState({
                isRock: false, 
                isSci:false,
                isPaper:false,
                onlyChooseOne:true})
          },2000)

    }

        render(){
            const onlyChooseOne = this.state.onlyChooseOne
            return(
            <div className="gameBox">



                <div className="user-options">

                    
                        <div
                        className="rock"
                        data-value="rock"
                        id={this.state.onlyChooseOne ? "" : "none"}
                        onClick={onlyChooseOne ? this.selected : undefined}
                        >

                            <img
                             alt="rock" 
                             src={require('../images/icon-rock.svg')}>
                             </img>

                        </div>



                        <div
                        className="paper"
                        data-value="paper" 
                        id={this.state.onlyChooseOne ? "" : "none"}

                        // id={this.state.isPaper  ? "move-animation" : ""} 
                        onClick={onlyChooseOne ? this.selected : undefined}
                        >

                            <img
                             alt="paper" 
                             src={require('../images/icon-paper.svg')} 
                             ></img>
                       
                        </div>



                        <div
                         className="sci" 
                         data-value="sci" 
                         id={this.state.onlyChooseOne ? "" : "none"}

                        //  id={this.state.isSci ? "move-animation" : ""}
                         onClick={onlyChooseOne ? this.selected : undefined}
                         >

                            <img 
                            alt="sci" 
                            src={require('../images/icon-scissors.svg')}>
                            </img>
                        
                        </div>

                        

                </div>

                {
                !onlyChooseOne
                &&
                <ComputerMove number={this.state.randomNumber} />
                }

                {
                !onlyChooseOne
                &&
                <UserMotion userChoice={this.state.userChoice} />
                }

                
                {
                <ScoreBox round={this.state.round} number={this.state.randomNumber} userChoice={this.state.userChoice} />
                }

            </div>
            )    
    }
}
  
  export default UserMove;



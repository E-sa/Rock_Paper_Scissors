import React from 'react';
import '../styles/style.scss';

import DeclareWinner from './DeclareWinner';



class ScoreBox extends React.Component{
    constructor() {
        super();
        this.state = {
            calculate : 0,
            isWin: false,
            isLose: false,
            isEven:false
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.round !== this.props.round) {
            this.calculate() ;

        }

        }


    calculate = () =>{

        const number = this.props.number
        const userChoice = this.props.userChoice

            if(number === 1){

                if(userChoice==='paper')
                {

                    this.setState(prevState =>{
                        return{calculate : prevState.calculate+1, isWin: true}
                    })
                }

                else if(userChoice==="rock"){
                    this.setState({isEven: true})

                }

                else{
                    this.setState({isLose: true})
                }

            }

            if(number === 2){

                if(userChoice==='sci')
                {
                    this.setState(prevState =>{
                        return{calculate : prevState.calculate+1, isWin: true}
                    })
                }

                else if(userChoice==="paper"){
                    this.setState({isEven: true})

                }

                else{
                    this.setState({isLose: true})
                }


            }

            if(number === 3){

                if(userChoice==='rock')
                {
                    this.setState(prevState =>{
                        return{calculate : prevState.calculate+1, isWin: true}
                    })
                }

                else if(userChoice==="sci"){
                    this.setState({isEven: true})

                }

                else{
                    this.setState({isLose: true})
                }



            }
        

            setTimeout(() => {
                this.setState({
                    isWin: false,
                    isLose: false,
                    isEven:false
                    })
              },2000)

    }





        
    

    


    render(){
        return (
            <div>
                <div className="scoreBox d-flex">

                <h1 className="mr-auto">ROCK <br /> PAPER <br /> SCISSORS</h1>
                <div>

                    <p>score</p>
                    <h2>{this.state.calculate}</h2>

                </div>



                </div>
                <DeclareWinner isWin={this.state.isWin} isLose={this.state.isLose} isEven={this.state.isEven} />

            </div>
 
            
        
        );

    }    
  }
  
  export default ScoreBox;
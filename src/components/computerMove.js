
import React from 'react';
import '../styles/style.scss';



class ComputerMove extends React.Component{


  
    render(){
        return(
            <div className="computerMove">
                
                    
            <div className="rock-grey" id={this.props.number===1 ? "move-animation2" : ""} data-value="rock">

                <img
                 alt="rock" 
                 src={require('../images/icon-rock.svg')}>
                 </img>

            </div>



            <div className="paper-grey" id={this.props.number===2 ? "move-animation2" : ""} data-value="paper" >

                <img
                 alt="paper" 
                 src={require('../images/icon-paper.svg')} 
                 ></img>
           
            </div>



            <div className="sci-grey" id={this.props.number===3 ? "move-animation2" : ""} data-value="sci" >

                <img 
                alt="sci" 
                src={require('../images/icon-scissors.svg')}>
                </img>
            
            </div>


    </div>

        )
    }
}

export default ComputerMove;

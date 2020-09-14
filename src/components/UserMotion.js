
import React from 'react';
import '../styles/style.scss';



class UserMotion extends React.Component{


  
    render(){
        return(
            <div className="user-options">
                
                    
            <div className="rock" id={this.props.userChoice==="rock" ? "move-animation" : "none"} data-value="rock">

                <img
                 alt="rock" 
                 src={require('../images/icon-rock.svg')}>
                 </img>

            </div>



            <div className="paper" id={this.props.userChoice==='paper' ? "move-animation" : "none"} data-value="paper" >

                <img
                 alt="paper" 
                 src={require('../images/icon-paper.svg')} 
                 ></img>
           
            </div>



            <div className="sci" id={this.props.userChoice==="sci" ? "move-animation" : "none"} data-value="sci" >

                <img 
                alt="sci" 
                src={require('../images/icon-scissors.svg')}>
                </img>
            
            </div>


    </div>

        )
    }
}

export default UserMotion;

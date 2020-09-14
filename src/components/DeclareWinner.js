
import React from 'react';
import '../styles/style.scss';



class DeclareWinner extends React.Component{
    

  
    render(){
        return(
            <div>
                {this.props.isWin &&  <div id='isWin'>YOU WIN :)</div>}
                {this.props.isLose && <div id='isWin'>YOU LOSE :(</div>}
                {this.props.isEven && <div id='isWin'>ITS EVEN :|</div>}
            </div>
        )
    }
}

export default DeclareWinner;

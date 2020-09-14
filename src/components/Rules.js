import React from 'react';
import '../styles/style.scss';




function Rules() {



    return (

        <div className="rules">
             <button data-toggle="collapse" data-target="#rulesPic">Rules</button>
                <div id="rulesPic" className="collapse">
                    <h1>Rules</h1>
                    <img alt="rules" src={require('../images/image-rules.svg')}></img>
            </div>

        </div>
    
    );
  }
  
  export default Rules;
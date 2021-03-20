import React from 'react';

const  Counter = ({index, score, changeScore}) => {

  /*constructor() {
    super()  //We call super() in order to call the constructor of the component class
    this.state = {
      score: 0
    };

  }*/

    return (
      <div className = "counter">
      <button  className="counter-action-decrement" onClick = {() => changeScore(index, -1)} > - </button>
      <span className="counter-score"> {score} </span>
      <button  className="counter-action-increment" onClick = {() => changeScore(index, 1)}> + </button>
      </div>
    );

}

export default Counter;

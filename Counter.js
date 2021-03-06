import React from 'react';

const  Counter = (props) => {

  /*constructor() {
    super()  //We call super() in order to call the constructor of the component class
    this.state = {
      score: 0
    };

  }*/



let index = props.index;



    return (
      <div className = "counter">
      <button  className="counter-action-decrement" onClick = {() => props.changeScore(index, -1)} > - </button>
      <span className="counter-score"> {props.score} </span>
      <button  className="counter-action-increment" onClick = {() => props.changeScore(index, 1)}> + </button>
      </div>
    );

}

export default Counter;

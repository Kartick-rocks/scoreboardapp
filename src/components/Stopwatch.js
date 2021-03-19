import React, { Component } from 'react';

class Stopwatch extends Component {

  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0
  };

  //Component lifecycle: Every component instance follows a cycle:
  //it's mounted onto the DOM
  //it is updated with changes in the data
  //it is unmounted from the DOM

  componentDidMount(){
    this.intervalID = setInterval(() => this.tick(), 100);
  }

  tick = () => {

     if (this.state.isRunning) {
       const now = Date.now(); //Time elpased since Jan 1 1970
       this.setState(prevState => ({
         previousTime: now,
         elapsedTime: prevState.elpasedTime + (now - this.state.previousTime)

       }));
     }
  }

 handleStopwatch = () => {
   this.setState(prevState => ({
     isRunning: !prevState.isRunning
   }));
   if (!this.state.isRunning){
     this.setState({previousTime: Date.now() });
   }

 }

 handleReset = () => {
   this.setState({ elapsedTime: 0 });
 }

  render(){
    const seconds = Math.floor(this.state.elapsedTime / 1000);
    return (

      <div className="stopwatch">
      <h2>Stopwatch</h2>
      <span className="stopwatch-time">{seconds }</span>
      <button onClick={this.handleStopwatch}>
      { this.state.isRunning ? 'Stop' : 'Start '}
       </button>
      <button onClick={this.handleReset}> Reset </button>

      </div>

    );
  }
}

export default Stopwatch;

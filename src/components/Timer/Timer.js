import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        timerA: 5,
        timerB: 1,
        checked: false,
        message: "Timer finished",
        maxTimeCount: 50,

    }
  }
  componentDidMount() {
      this.setState({
        checked: true
      })
  }
  startTimer = (event) => {
      event.preventDefault();  
      var self = this 
      if(this.state.timerA > timerB) {
        setInterval(() => {   
            this.setState({
                timerA: timerA+1
            })       
        }, 1000);
      } else {
        setInterval(() => {   
            this.setState({
                timerB: timerB+1
            })       
        }, 2000);
      }  
  
  };

  resetTimer = (event) => {
    event.preventDefault();      
       this.setState({
           time : ""
       })
      
  };

  render() {
    return (
      <div>
        <h3>Timer</h3>
        <div>
            
            <input
            type="text"       
             value = {this.state.timerA}            
            /> 
          
          
           <input type="text" 
           value = {this.state.timerB}/>
          <input type="checkbox" checked={this.state.checked} />
        </div>
        <br />
        <input type="text" value = {this.state.maxTimeCount}/>
        <br />
        <div>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.resetTimer}>Reset</button>
          { (this.state.timerA && this.state.timerB) === this.state.maxCount ?
          <p>this.state.message</p> : null
          }
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        timerA: 0,   
        timerB: 0,        
        checked: false,        
        maxTimeCount: 50,
        start: 0
    }
  }
  async componentDidMount() {
     this.timerA();
     this.timerB();

      
  }

  timerA = () => {
    this.setState({          
      timerA: this.state.timerA,
    })
    this.timer = setInterval(() => this.setState({
      timerA: this.state.timerA + 1
    }), 1000);
  }


  timerB= () => {
    this.setState({          
      timerB: this.state.timerB,
    })
    this.timer = setInterval(() => this.setState({
      timerB: this.state.timerB + 1
    }), 1500);
  }

  startTimer = (event) => {
      event.preventDefault();  
      console.log('start');
      
        let intervalsA = setInterval(() => {   
          while(this.state.timerA>=this.state.maxTimeCount) {
            this.setState({
              timerA: this.state.timerA +1
          }) 
          }
                 
        }, 1000);

        clearInterval(intervalsA);
      
        let intervalsB = setInterval(() => {   
          while(this.state.timerB>=this.state.maxTimeCount) {
            this.setState({
              timerB: this.state.timerB +1
          }) 
          }       
        }, 2000);
     
        clearInterval(intervalsB);
  };

  resetTimer = (event) => {
    event.preventDefault();      
       this.setState({
           timerA: 0,
           timerB: 0
       })
      
  };

  render() {
    return (
      <div>
        <h3>Timer</h3>
        <div>            
            <input type="text" value = {this.state.timerA} /> 
           <input type="text" value = {this.state.timerB} />
          <input type="checkbox" checked={this.state.checked} />
        </div>
        <br />
        <input type="text" value = {this.state.maxTimeCount}/>
        <br />
        <div>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.resetTimer}>Reset</button>
          
        </div>
      </div>
    );
  }
}

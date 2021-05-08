import React from 'react';
import './App.css';
import Submit from './components/submit';
import Input from './components/input';
import Timer from './components/display';
import Particles from 'react-particles-js';

import { render } from 'react-dom';
const particlesEffect = {
  particles: {
    number :{
      value: 10,
      density: {
        enable : true,
        value_area : 100
      }
    }
    },
    interactivity: {
      events: {
          onhover: {
              enable: true,
              mode: "repulse"
          }
      }
  },
   polygon: {
    enable: true,
    scale: 0.5,
    
    move: {
        radius: 10
    }
	    
}
}

class App extends React.Component{
  constructor(){
    super();
    this.countDownDate = 0;
    this.interval = undefined;
    this.endDate = "";
    this.state = {
      input: "",
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }

    }
  


  getInput = (e) => {
    this.setState({input: e.target.value});
  }
  submit = () => {
    if(this.state.input!=="") {
      this.countDownDate = new Date(this.state.input).getTime();
      this.endDate = new Date(this.state.input).toDateString();
      this.endDate = this.endDate.substring(4,10) + "," + this.endDate.substring(10, this.endDate.length);
      this.setState({input: ""});
      this.calculate();
    }
  }
  
  calculate = () => {
    let now = new Date().getTime();
    let utc_ist_difference = 19800000;
    let count = this.countDownDate - now - utc_ist_difference;
    if(count<0) {
      alert("Please choose future date");
      this.endDate = "";
      this.setState({days: 0, hours: 0, minutes: 0, seconds: 0}, () => this.endTimer());
    }
    else {
      this.timer(count);
    }
  }

  timer = (count) => {
    let interval = setInterval(() => {
      count -= 1000;
      let day = Math.floor(count / (24*60*60*1000));
      let hour = Math.floor((count % (24*60*60*1000)) / (60*60*1000));
      let minute = Math.floor((count % (60*60*1000)) / (60*1000));
      let second = Math.floor((count % (60*1000)) / (1000));
      this.setState({days: day, hours: hour, minutes: minute, seconds: second}, () => this.endTimer(interval));
    }, 1000);
  }

  endTimer = () => {
    let {days, hours, minutes, seconds} = this.state;
    let sum = days + hours + minutes + seconds;
    if(!sum) {
      clearInterval(this.interval);
    }
  }

  render() {

    return (
      <React.Fragment>
        <Particles  params={particlesEffect} className="particles"/>
        <div className="text-center">
          <h1 >CountDown Timer</h1>
          <h4 className="fa">The Timer ends on {this.endDate} </h4>
          <Timer className="time" days={this.state.days} hours={this.state.hours} minutes={this.state.minutes} seconds={this.state.seconds}/>
          <br></br>
          <Input getInput={this.getInput} value={this.state.input} />
          <Submit submit={this.submit}  />
        </div>

      </React.Fragment>
     
    );
  }
}





export default App;

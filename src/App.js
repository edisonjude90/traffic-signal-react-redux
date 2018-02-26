import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TrafficSignalBoard from './TrafficSignalBoard';
import TrafficSignalBoardControl from './TrafficSignalBoardControl'
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className = "row" >
            <div className = "col-md-12 text-center">
                <h1>Traffic Signal</h1>
            </div>
        </div>
        <div className = "row" >
            <div className = "col-md-8">
                <TrafficSignalBoard />
                
            </div>  
            <div className = "col-md-4">
              <TrafficSignalBoardControl />
              
            </div>
        </div> 
      </div>
    );
  }
}

export default App;

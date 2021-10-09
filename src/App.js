import React, { Component } from "react";
import './App.css';
import CarDetails from './components/cardetails';
import carData from './carData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CarDetails carData={carData}/>
      </div>
    );
  }
}
export default App;

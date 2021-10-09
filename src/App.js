import React, { Component } from "react";
import './App.css';
import CarDetails from './components/cardetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CarDetails/>
      </div>
    );
  }
}
export default App;

import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import WandList from "./wandList";
import WandCards from "./wandCards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <WandList />
      </div>
    );
  }
}

export default App;

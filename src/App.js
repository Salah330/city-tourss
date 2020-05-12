import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import Tourlist from "./Components/Tourlist/Tourlist";

class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <Tourlist />
      </main>
    );
  }
}

export default App;

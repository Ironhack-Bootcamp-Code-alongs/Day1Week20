import React from "react";
import logo from "./logo.svg";
import "./App.css";

import axios from "axios";
import AddImage from "./components/AddImage";

class App extends React.Component {
  componentDidMount() {
    axios.get("http://localhost:5000/api").then((res) => console.log(res.data));
  }

  render() {
    return (
      <div className="App">
        <AddImage />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getAllProducts } from "./service";
import AddProduct from "./components/AddProduct";

class App extends React.Component {
  state = {
    image: "",
  };

  componentDidMount = () => {
    getAllProducts().then(console.log);
  };
  render() {
    return (
      <div className="App">
        <AddProduct addImage={(image) => this.setState({ image })} />
        {this.state.image && <img src={this.state.image} atl="Fancy" />}
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

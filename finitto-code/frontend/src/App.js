import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getAllProducts } from "./service";
import AddProduct from "./components/AddProduct";
import { Routes } from "./Routes";
import { Layout } from "./components";

class App extends React.Component {
  state = {
    image: "",
  };

  componentDidMount = () => {
    getAllProducts().then(console.log);
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Routes addImage={(image) => this.setState({ image })} />
      </div>
    );
  }
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import logo from "../logo.svg";

export const HomePage = ({ addImage }) => {
  return (
    <>
      <h1>Poyo!</h1>
      <AddProduct addImage={addImage} />
    </>
  );
};

export default HomePage;

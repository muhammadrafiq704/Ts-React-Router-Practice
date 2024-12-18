// import axios from "axios";
import { defer, LoaderFunction } from "react-router-dom";

const laoder: LoaderFunction = async () => {
  try {
    const response = fetch("https://fakestoreapi.com/products");
    const products = (await response).json();
    // console.log("products", products);
    return defer({
      products,
    });
  } catch (error) {
    console.log("Error while getting fake product data", error);
  }
};

export default laoder;

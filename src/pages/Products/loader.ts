// import axios from "axios";
import { defer, LoaderFunction } from "react-router-dom";

const Laoder: LoaderFunction = async () => {
  try {
      const response = await fetch("https://fakestoreapi.com/products")
      // console.log('products', response)
      const products = await response.json()
      return defer({
        products
        })
  } catch (error) {
    console.log("Error while getting fake product data", error);
  }
};

export default Laoder;

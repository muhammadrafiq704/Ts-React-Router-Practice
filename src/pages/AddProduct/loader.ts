// import axios from "axios";
import { defer, LoaderFunction } from "react-router-dom";

const laoder: LoaderFunction = async ({params}) => {
    // console.log('params', params)
    const {id} = params;
  try { 
    const response = fetch(`https://fakestoreapi.com/products/${id}`);
    const product = (await response).json();
    // console.log("product", product); 
    return defer({
      product,
    });
  } catch (error) {
    console.log("Error while getting fake product data", error);
  }
};

export default laoder;

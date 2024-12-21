import { defer, LoaderFunction } from "react-router-dom";

const loader: LoaderFunction = async ({ params }) => {
  // console.log("params.id", params.id);
  try {
    const response =  fetch(`https://fakestoreapi.com/products/${params.id}`);
    const product = (await response).json();
    // console.log("single product", product);
    return defer({
      product,
    });
  } catch (error) {
    console.log("Error getting single product");
    throw error;
  }
};

export default loader;

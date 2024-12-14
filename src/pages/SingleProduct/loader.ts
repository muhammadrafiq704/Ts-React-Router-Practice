import { defer, LoaderFunction } from "react-router-dom";

const Loader: LoaderFunction = async ({ params }) => {
  // console.log("params.id", params.id);
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    );
    const product = await response.json();
    // console.log("product", product);
    return defer({
      product
    });
  } catch (error) {
    console.log("Error getting single product");
    throw error;
  }
};

export default Loader;

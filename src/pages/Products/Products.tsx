import React from "react";
import { useLoaderData } from "react-router-dom";

const Products: React.FC = () => {
  const response = useLoaderData();
  console.log("response", response);
  return <>
  
  </>;
};

export default Products;

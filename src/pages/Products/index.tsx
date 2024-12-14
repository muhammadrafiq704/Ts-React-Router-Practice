import React, { Suspense } from "react";
import { Await, useLoaderData, useNavigation } from "react-router-dom";
import {
  Navlink,
  ProductContainer,
  ProductContentContainer,
  ProductImage,
  UIButton,
} from "./ui";
import { Box, LinearProgress } from "@mui/material";

// typescript types define here
type Product = {
  id: number;
  image: string;
  category: string;
  description: string;
  price: number;
  title: string;
};

const Products: React.FC = () => {
  const loaderData = useLoaderData() as {
    products: Product[];
  };
  // console.log("loaderData", loaderData);
  const navigation = useNavigation();

  return (
    <ProductContainer>
      {navigation.state === "loading" && <LinearProgress />}
      <Suspense fallback={<div>Loading...</div>}>
        <Await
          errorElement={<div>Error occurred while loading products</div>}
          resolve={loaderData.products}
        >
          {(products) =>
            products.slice(0, -16).map((product: Product) => (
              <Navlink to={`/${product.id}`} key={product.id}>
                <ProductImage key={product.id}>
                  <img src={product.image} alt={`Product ${product.id}`} />
                </ProductImage>
                <ProductContentContainer>
                  <Box p="2em">
                    <p>{product.category}</p>
                    <span style={{ fontWeight: "bold" }}>{product.title}</span>
                  </Box>
                  <span style={{ fontWeight: "bold", color: "orange" }}>
                    Price:{product.price.toFixed(2)}
                  </span>

                  <UIButton>Details</UIButton>
                </ProductContentContainer>
              </Navlink>
            ))
          }
        </Await>
      </Suspense>
    </ProductContainer>
  );
};

export default Products;

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
  const { products } = useLoaderData() as { products: Promise<Product[]> };
  console.log("loaderData", products);
  const navigation = useNavigation();
// console.log('navigation', navigation)
  return (
    <ProductContainer>
      {navigation.state === "idle" && <LinearProgress />}
      <Suspense fallback={<div>Loading...</div>}>
        <Await
          errorElement={<div>Error occurred while loading products</div>}
          resolve={products}
        >
          {(resolvedProducts) =>
            resolvedProducts.slice(0, -16).map((product: Product) => (
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

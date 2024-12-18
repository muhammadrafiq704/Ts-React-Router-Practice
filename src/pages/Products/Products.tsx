import React, { Suspense } from "react";
import { Await, NavLink, useLoaderData } from "react-router-dom";
import {
  ProductCard,
  ProductContainer,
  ProductContentContainer,
  ProductImage,
  UIButton,
  UIButtonContainer,
} from "./ui";
import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import ErrorBoundary from "../../components/ErrorBoundary";

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

  return (
    <ProductContainer>
      <Suspense
        fallback={
          <CircularProgress
            variant="determinate"
            size={40}
            thickness={4}
            value={100}
          />
        }
      >
        <Await errorElement={<ErrorBoundary />} resolve={products}>
          {(resolvedProducts) =>
            resolvedProducts.slice(0, -16).map((product: Product) => (
              <>
                <ProductCard key={product.id}>
                  <ProductImage key={product.id}>
                    <img src={product.image} alt={`Product ${product.id}`} />
                  </ProductImage>
                  <ProductContentContainer>
                    <Box p="2em">
                      <p>{product.category}</p>
                      <span style={{ fontWeight: "bold" }}>
                        {product.title}
                      </span>
                    </Box>
                    <span style={{ fontWeight: "bold", color: "orange" }}>
                      Price:{product.price.toFixed(2)}
                    </span>
                    <UIButtonContainer>
                      <NavLink to={`${product.id}`}>
                        <UIButton>Details</UIButton>
                      </NavLink>
                      <NavLink to="/product/add">
                        <UIButton>Add</UIButton>
                      </NavLink>
                    </UIButtonContainer>
                  </ProductContentContainer>
                </ProductCard>
              </>
            ))
          }
        </Await>
      </Suspense>
    </ProductContainer>
  );
};

export default Products;

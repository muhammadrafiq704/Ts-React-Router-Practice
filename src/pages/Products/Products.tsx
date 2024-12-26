  import React, { Fragment, Suspense } from "react";
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
    // console.log("products", products);
    // const navigate = useNavigate();

    return (
      <>
        <ProductContainer>
          <NavLink to="/product/add">
            <UIButton>Add Product</UIButton>
          </NavLink>
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
            <Await
              resolve={products}
              errorElement={
                <>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 10,
                    }}
                  >
                    <h2 style={{ color: "orangered" }}>
                      Error found while products page render
                    </h2>
                    {/* <button
                      onClick={() => navigate("/")}
                      style={{ padding: "10px 12px", fontSize: "12px" }}
                    >
                      Go Back
                    </button> */}
                  </div>
                </>
              }
            >
              {(resolvedProducts) =>
                resolvedProducts
                  // .slice(0, -16)
                  .map((product: Product) => (
                    <Fragment key={product.id}>
                      <ProductCard>
                        <ProductImage>
                          <img
                            src={product.image}
                            alt={`Product ${product.title}`}
                          />
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
                          </UIButtonContainer>
                        </ProductContentContainer>
                      </ProductCard>
                    </Fragment>
                  ))
              }
            </Await>
          </Suspense>
        </ProductContainer>
      </>
    );
  };

  export default Products;

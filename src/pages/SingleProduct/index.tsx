import React, { Suspense } from "react";
import { Await, useLoaderData, NavLink } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { SingleProductCard, SingleProductContainer } from "./ui";
import { UIButton } from "../Products/ui";

const SingleProduct: React.FC = () => {
  const loaderData = useLoaderData() as { product: unknown };

  return (
    <SingleProductContainer>
      <Suspense fallback={<LinearProgress />}>
        <Await
          resolve={loaderData.product}
          errorElement={<div>Error while fetching product details</div>}
        >
          {(product) => (
            <SingleProductCard>
              <h3>{product.category.toUpperCase()}</h3>
              <small>{`Rate: ${product.rating.rate} Count: ${product.rating.count}`}</small>
              <h2>{product.title}</h2>
              <img src={product.image} alt={product.title} />
              <p>{product.description}</p>
              <span style={{ fontWeight: "bold", color: "orange" }}>
                Price: {product.price.toFixed(2)}
              </span>
              <NavLink to="/">
                <UIButton>Go Back</UIButton>
              </NavLink>
            </SingleProductCard>
          )}
        </Await>
      </Suspense>
    </SingleProductContainer>
  );
};

export default SingleProduct;

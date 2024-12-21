import React, { Suspense } from "react";
import {
  Await,
  useLoaderData,
  NavLink,
  useParams,
  useNavigate,
  Outlet,
} from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { SingleProductCard, SingleProductContainer } from "./ui";
import { UIButton, UIButtonContainer } from "../Products/ui";

const SingleProduct: React.FC = () => {
  const { product } = useLoaderData() as { product: unknown };
  const params = useParams();
  const navigate = useNavigate();

  // console.log("params", params);
  // console.log("product", product);
  // function for deleting prodict
  const handleDelete = async () => {
    const confirmed = window.confirm(
      `Are your sure to deleted product ${params.id}`
    );
    if (!confirmed) return;
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`,
        {
          method: "DELETE",
        }
      );
      console.log("response", response.json());
      if (!response.ok) {
        throw new Error("failed to delete product");
      }
      alert("product deleted successfully");
      navigate("/");
    } catch (error) {
      console.error("Error deleting product", error);
      alert("An error accurrred");
    }
  };

  return (
    <>
      <SingleProductContainer>
        <Suspense fallback={<LinearProgress />}>
          <Await
            resolve={product}
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
                  <button
                    onClick={() => navigate("/")}
                    style={{ padding: "10px 12px", fontSize: "12px" }}
                  >
                    Go Back
                  </button>
                </div>
              </>
            }
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
                <UIButtonContainer>
                  <NavLink to="/">
                    <UIButton>Go Back</UIButton>
                  </NavLink>
                  <NavLink to={`/${product.id}/edit`}>
                    <UIButton>Edit</UIButton>
                  </NavLink>
                  <NavLink onClick={handleDelete} to={""}>
                    <UIButton>Delete</UIButton>
                  </NavLink>
                </UIButtonContainer>
              </SingleProductCard>
            )}
          </Await>
        </Suspense>
      </SingleProductContainer>
      <Outlet />
    </>
  );
};

export default SingleProduct;

import React from "react";
import { Form, Await, useLocation } from "react-router-dom";
import { FormContainer, FormContentContainer } from "../Products/ui";
import { CircularProgress } from "@mui/material";

const EditFormComponent: React.FC = () => {
  //   const  {product}  = useLoaderData() as { product: Promise<unknown> };
  // console.log('product', product)

  const location = useLocation();
  const { product } = location.state as { product: unknown };
  console.log("product", product);
  
  return (
    <FormContentContainer>
      <React.Suspense
        fallback={
          <CircularProgress
            variant="determinate"
            size={40}
            thickness={4}
            value={100}
          />
        }
      >
        <Await resolve={product}>
          {(resolvedProduct) => (
            <Form method="put" action={`/${resolvedProduct.id}`}>
              <FormContainer>
                <h3>Edit Product</h3>
                <label>
                  <span>Title:</span>
                  <input
                    type="text"
                    name="title"
                    defaultValue={resolvedProduct.title}
                  />
                </label>
                <label>
                  <span>Price:</span>
                  <input
                    type="text"
                    name="price"
                    defaultValue={resolvedProduct.price}
                  />
                </label>
                <label>
                  <span>Category:</span>
                  <input
                    type="text"
                    name="category"
                    defaultValue={resolvedProduct.category}
                  />
                </label>
                <label>
                  <span>Description:</span>
                  <input
                    name="description"
                    defaultValue={resolvedProduct.description}
                  />
                </label>
                <label>
                  <span>Image:</span>
                  <input type="file" name="image" />
                </label>
                <button type="submit" name="intent" value="edit">
                  Update Now
                </button>
              </FormContainer>
            </Form>
          )}
        </Await>
      </React.Suspense>
    </FormContentContainer>
  );
};

export default EditFormComponent;

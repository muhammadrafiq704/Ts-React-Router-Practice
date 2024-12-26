import React from "react";
import {
  Await,
  SubmitOptions,
  useActionData,
  useLoaderData,
  useNavigate,
  useSubmit,
} from "react-router-dom";
import { FormContainer, FormContentContainer } from "../Products/ui";
import { CircularProgress } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";

interface ActionData {
  status?: string;
  message?: string;
}

const EditFormComponent: React.FC = () => {
  const { product } = useLoaderData() as { product: unknown };
  //   console.log("product", product);
  // const product = Promise.reject(new Error("Simulated fetch error"));

  const submit = useSubmit();
  const navigate = useNavigate();
  const actionData = useActionData() as ActionData | null;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    const submitOptions: SubmitOptions = {
      method: "PUT",
      encType: "application/json",
    };
    submit(data, submitOptions);
  };

  console.log("actionData", actionData);
  console.log("errors", errors);

  return actionData?.status ? (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h4>{actionData.status}</h4>
        <span>{actionData.message}</span>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </>
  ) : (
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
                  Error found while product edit page render
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
          {(resolvedProduct) => (
            <form
              onSubmit={handleSubmit(onSubmit)}
              action={`${resolvedProduct.id}`}
            >
              <FormContainer>
                <h3>Edit Product</h3>
                <label>
                  <span>Title:</span>
                  <input
                    type="text"
                    // name="title"
                    defaultValue={resolvedProduct.title}
                    {...register("title", {
                      required: {
                        value: true,
                        message: "Title is required",
                      },
                    })}
                    style={{ borderColor: errors.title ? "red" : "" }}
                  />
                  {errors.title?.message &&
                    typeof errors.title.message === "string" && (
                      <span style={{ color: errors.title ? "red" : "" }}>
                        {errors.title.message}
                      </span>
                    )}
                </label>
                <label>
                  <span>Price:</span>
                  <input
                    type="number"
                    // name="price"
                    defaultValue={resolvedProduct.price}
                    {...register("price", {
                      required: "Price is required",
                    })}
                    style={{
                      borderColor: errors.price ? "red" : "",
                    }}
                  />
                  {errors.price?.message &&
                    typeof errors.price.message === "string" && (
                      <span style={{ color: errors.price ? "red" : "" }}>
                        {errors.price?.message}
                      </span>
                    )}
                </label>
                <label>
                  <span>Category:</span>
                  <input
                    type="text"
                    // name="category"
                    defaultValue={resolvedProduct.category}
                    {...register("category", {
                      required: {
                        value: true,
                        message: "category is required",
                      },
                    })}
                  />
                  {errors.category?.message &&
                    typeof errors.category.message === "string" && (
                      <span style={{ color: errors.category ? "red" : "" }}>
                        {errors.category.message}
                      </span>
                    )}
                </label>
                <label>
                  <span>Description:</span>
                  <input
                    // name="description"
                    defaultValue={resolvedProduct.description}
                    {...register("description", {
                      required: {
                        value: true,
                        message: "Description is required",
                      },
                    })}
                  />
                  {errors.description?.message &&
                    typeof errors.description.message === "string" && (
                      <span style={{ color: errors.description ? "red" : "" }}>
                        {errors.description.message}
                      </span>
                    )}
                </label>
                <label>
                  <span>Image:</span>
                  {/* <img
                    src={resolvedProduct.image}
                    alt="image"
                    height={200}
                    width={200}
                  /> */}
                  <input
                    type="file"
                    // name="image"
                    {...register("image", {
                      required: {
                        value: true,
                        message: "Image is required",
                      },
                    })}
                  />
                  {errors.image?.message &&
                    typeof errors.image.message === "string" && (
                      <span style={{ color: errors.image ? "red" : "" }}>
                        {errors.image.message}
                      </span>
                    )}
                </label>
                <button type="submit">Update Now</button>
              </FormContainer>
            </form>
          )}
        </Await>
      </React.Suspense>
    </FormContentContainer>
  );
};

export default EditFormComponent;

import React from "react";
import { useNavigate, useSubmit } from "react-router-dom";
import {
  FormContainer,
  FormContentContainer,
  UIButtonContainer,
} from "../Products/ui";
import { FieldValues, useForm } from "react-hook-form";

const EditFormComponent: React.FC = () => {
  const submit = useSubmit();
 const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    console.log("formData", formData);
    submit(formData, {
      method: "post",
      action: `/product/add`,
    });
  };

  // console.log("errors", errors);
  return (
    <FormContentContainer>
      <form onSubmit={handleSubmit(onSubmit)} action={`/product/add`}>
        <FormContainer>
          <h3>Add Product</h3>
          <label>
            <span>Title:</span>
            <input
              type="text"
              // name="title"
              // defaultValue={resolvedProduct.title}
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
              // defaultValue={resolvedProduct.price}
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
              // defaultValue={resolvedProduct.category}
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
              // defaultValue={resolvedProduct.description}
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
            <span>Upload Image:</span>
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
          <UIButtonContainer>
            <button type="button" onClick={()=> navigate('/')}>Go Back</button>
            <button type="submit">Add Now</button>
          </UIButtonContainer>
        </FormContainer>
      </form>
    </FormContentContainer>
  );
};

export default EditFormComponent;

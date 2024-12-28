import React from "react";
import {
  SubmitOptions,
  // useActionData,
  useNavigate,
  useSubmit,
} from "react-router-dom";
import {
  FormContainer,
  FormContentContainer,
  UIButtonContainer,
} from "../Products/ui";
import { FieldValues, useForm, Controller } from "react-hook-form";

const EditFormComponent: React.FC = () => {
  const submit = useSubmit();
  const navigate = useNavigate();
  // const actionData = useActionData();
  // console.log("actionData", actionData);

  const {
    handleSubmit,
    control,
    reset,
    getValues,
    formState,
    formState: {
      errors,
      // isSubmitSuccessful,
      // isSubmitted,
      // submitCount,
      isSubmitting,
      isValid,
    },
  } = useForm({
    defaultValues: {
      title: "",
      price: "",
      category: "",
      description: "",
      image: "",
    },
  });
  // console.log('isSubmitSuccessful', isSubmitSuccessful)
  // console.log('isSubmitted', isSubmitted)
  console.log("isSubmitting", isSubmitting);
  console.log("isValid", isValid);
  console.log("error", errors);

  const onSubmit = (data: FieldValues) => {
    const submitData: SubmitOptions = {
      method: "POST",
      encType: "application/json",
    };
    submit(data, submitData);
  };

  React.useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        ...getValues(),
        title: "",
        price: "",
        category: "",
        description: "",
      });
    }
  }, [formState, getValues, reset]);

  return (
    <FormContentContainer>
      <form onSubmit={handleSubmit(onSubmit)} action={`/product/add`}>
        <FormContainer>
          <h3>Add Product</h3>
          <label>
            <span>Title:</span>
            <Controller
              control={control}
              name="title"
              rules={{
                required: { value: true, message: "Title is required in ly" },
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <input
                  type="text"
                  placeholder="Enter title"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  ref={ref}
                  // {...register("title", {
                  //   required: {
                  //     value: true,
                  //     message: "Title is required",
                  //   },
                  // })}
                  style={{ borderColor: errors.title ? "red" : "" }}
                />
              )}
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
            <Controller
              control={control}
              name="price"
              rules={{
                required: { value: true, message: "Price is required" },
                min: 10,
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <input
                  type="number"
                  placeholder="Enter price"
                  onBlur={onBlur}
                  onChange={(e) => onChange(e.target.value)}
                  value={value}
                  ref={ref}
                  // name="price"
                  // defaultValue={resolvedProduct.price}
                  //  {...register("price", {
                  //    required: "Price is required",
                  //  })}

                  style={{
                    borderColor: errors.price ? "red" : "",
                  }}
                />
              )}
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
            <Controller
              control={control}
              name="category"
              rules={{
                required: { value: true, message: "Category is required" },
              }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <input
                  type="text"
                  placeholder="Enter category"
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                  value={value}
                  style={{
                    borderColor: errors.price ? "red" : "",
                  }}
                />
              )}
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
            <Controller
              control={control}
              name="description"
              rules={{ required: { value: true, message: "Desc is require" } }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <input
                  type="text"
                  placeholder="Enter description"
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                  value={value}
                />
              )}
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
            <Controller
              name="image"
              control={control}
              rules={{ required: { value: true, message: "image is require" } }}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <input
                  type="file"
                  onChange={onChange}
                  onBlur={onBlur}
                  ref={ref}
                  value={value}
                />
              )}
            />
            {errors.image?.message &&
              typeof errors.image.message === "string" && (
                <span style={{ color: errors.image ? "red" : "" }}>
                  {errors.image.message}
                </span>
              )}
          </label>
          <UIButtonContainer>
            <button type="button" onClick={() => navigate("/")}>
              Go Back
            </button>
            {/* {isValid ? */}
            <button type="submit" disabled={!isValid}>
              {isSubmitting ? "Adding..." : "Add Now"}
            </button>
            {/* : null} */}
          </UIButtonContainer>
        </FormContainer>
        <button
          type="button"
          onClick={() => {
            reset(
              {
                ...getValues(),
              }
              // {keepDefaultValues: true}
            );
          }}
        >
          Reset Form
        </button>
      </form>
    </FormContentContainer>
  );
};

export default EditFormComponent;

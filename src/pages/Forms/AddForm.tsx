import React from "react";
import { Form } from "react-router-dom";
import {  FormContainer, FormContentContainer } from "../Products/ui";

const FormComponent: React.FC = () => {
  return (
    <FormContentContainer>
      <Form method="post" action="/">
        <FormContainer>
          <h3>Route Action Form</h3>
          <span>Add prodcut</span>
          <label>
            <span>Title:</span>
            <input type="text" name="title" />
          </label>
          <label>
            <span>Price:</span>
            <input type="text" name="price" />
          </label>
          <label>
            <span>Category:</span>
            <input type="text" name="category" />
          </label>
          <label>
            <span>Description:</span>
            <input type="text" name="desc" />
          </label>
          <label>
            <span>Image:</span>
            <input type="file" name="img" />
          </label>
          <button type="submit" name= "intent" value="add">Add Now</button>
          {/* <UIButton>Submit</UIButton> */}
        </FormContainer>
      </Form>
    </FormContentContainer>
  );
};

export default FormComponent;

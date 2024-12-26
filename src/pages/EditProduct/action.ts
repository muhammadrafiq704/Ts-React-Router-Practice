import { ActionFunction, redirect } from "react-router-dom";

const action: ActionFunction = async ({ request, params }) => {
  try {
    // console.log("request.json()", request.json());
    const { id } = params;
    console.log("id", id);

    switch (request.method) {
      case "PUT": {
        const formData = await request.json();
        console.log("formData", formData);

        const response = await fetch(
          `https://fakestoreapi.com/products/${params.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        alert(`product updated successfully ${formData.category}`);
        redirect(`/${params.id}`);
        return response.json();
      }
      default:
        throw new Error(`Unsupported  request method: ${request.method} `);
    }
  } catch (error) {
    console.log("error found while editing", error);
  }

  return redirect(`/${params.id}`);
};

export default action;

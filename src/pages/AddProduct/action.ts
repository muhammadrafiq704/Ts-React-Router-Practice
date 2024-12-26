import { ActionFunction, redirect } from "react-router-dom";

const action: ActionFunction = async ({ request }) => {
  try {
    switch (request.method) {
      case "POST": {
        const formData = await request.json();
        console.log('formData', formData)
      
        const response = await fetch(`https://fakestoreapi.com/products/`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        alert(`product updated successfully ${formData.category}`);
        return response.json();
      }
      default:
        throw new Error(`Unsupported  request method: ${request.method} `);
    }
  } catch (error) {
    alert("error found while adding");
    console.log("error while adding ", error);
  }

  return redirect(`/`);
};

export default action;

import { ActionFunction, redirect } from "react-router-dom";

const action: ActionFunction = async ({ request, params }) => {
  try {
    // console.log("request", request);
    const data = await request.formData();

    const updatedData = {
      title: data.get("title"),
      price: data.get("price"),
      category: data.get("category"),
      description: data.get("description"),
      image: data.get("image"),
    };

    // for edit product
    // console.log("updatedData", updatedData);
    if (request.method === "PUT") {
      const response = await fetch(
        `https://fakestoreapi.com/products/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );
   
      if (!response.ok) {
        alert("Failed to update product");
      }
      alert(`product updated successfully ${data.get("category")}`);
      redirect(`/${params}`);
    }
  } catch (error) {
    console.log("error found while editing", error);
  }

  return redirect(`/${params}`); 
};

export default action;

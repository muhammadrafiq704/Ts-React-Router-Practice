import { ActionFunction, redirect } from "react-router-dom";

const action: ActionFunction = async ({ request }) => {
  try {
    console.log("request", request);
    const data = await request.formData();

    const updatedData = {
      title: data.get("title"),
      price: data.get("price"),
      category: data.get("category"),
      description: data.get("description"),
      image: data.get("image"),
    };

    // for edit product
    if (request.method === "POST") {
      fetch("https://fakestoreapi.com/products", {
        method: "POST",
        body: JSON.stringify(updatedData),
      }).then((response) => response.json());
      alert(`product Added successfully ${data.get("category")}`);
    }
  } catch (error) {
    alert("error found while adding");
    console.log("error while adding ", error);
  }

  return redirect(`/`);
};

export default action;

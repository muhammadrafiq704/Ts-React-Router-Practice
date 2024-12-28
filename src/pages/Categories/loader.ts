import { LoaderFunction, redirect } from "react-router-dom";

const laoder: LoaderFunction = async () => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    if (response.status === 404) {
      throw new Response("Categories Not Found", { status: 404 });
    }

    const categories = await response.json();
    return { categories };
  } catch (error) {
    console.log("Error found while fetching categories", error);
  }
  return redirect("/products/categories");
};
export default laoder;

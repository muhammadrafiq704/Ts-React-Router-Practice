import { LoaderFunction, redirect } from "react-router-dom";

const laoder: LoaderFunction = async ({ params }) => {
  const { category } = params;
  console.log("category", category);
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    if (response.status === 404) {
      throw new Response("Categoried Not Found", { status: 404 });
    }

    console.log("response", response);
    const SingleCategory = await response.json();
    console.log("SingleCategory", SingleCategory);

    // alert("Categories Got succesfully");
    return { SingleCategory };
  } catch (error) {
    console.log("Error found while fetching categories", error);
  }
  return redirect("/products/categories");
};
export default laoder;

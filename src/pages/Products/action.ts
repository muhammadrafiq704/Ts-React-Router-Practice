import axios from "axios";
import { ActionFunction, redirect } from "react-router-dom";

const action: ActionFunction = async ({ request }) => {
  try {
    console.log("request", request);
    const data = await request.formData();
    const intent = data.get("intent");
    // console.log("intent", intent);
    // console.log("params", params);

    // for posting product
    if (intent === "add") {
      const submission = {
        title: data.get("title"),
        price: data.get("price"),
        category: data.get("category"),
        description: data.get("desc"),
        image: data.get("img"),
      };
      console.log("submission", submission);

      const response = await axios.post(
        "https://fakestoreapi.com/products",
        data
      );
      if (response.status === 200) {
        console.log("new data added successfully");
        console.log("response", response);
      }
    }
  } catch (error) {
    console.log("error found while adding from product", error);
  }

  return redirect("/");
};

export default action;

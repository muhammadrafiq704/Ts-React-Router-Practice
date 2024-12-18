import { Route } from "react-router-dom";
import RoutesData from "./RoutesData";
import App from "../App";
import Layout from "../layout";
import FormComponent from "../pages/Forms/AddForm";
import EditFormComponent from "../pages/Forms/EditForm";
// import { loader } from "../pages/SingleProduct";

const routes = (
  <Route path={RoutesData.ROOT} element={<App />}>
    <Route element={<Layout />}>
      <Route
        path={RoutesData.PRODUCTS}
        lazy={() => import("../pages/Products")}
      />
      <Route
        path={RoutesData.SINGLEPRODUCTS}
        lazy={() => import("../pages/SingleProduct")}
      />
      {/* </Route> */}
        <Route
          path={RoutesData.EDITPRODUCT}
          // loader={loader}
          element={<EditFormComponent />}
        />
      <Route path={RoutesData.ADDPRODUCT} element={<FormComponent />} />
      {/* <Route 
      path={RoutesData.DELETECONTACT}
      element={<EditFormComponent/>}
      /> */}
    </Route>
  </Route>
);

export default routes;

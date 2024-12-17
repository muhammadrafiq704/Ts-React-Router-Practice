import { Route } from "react-router-dom";
import RoutesData from "./RoutesData";
import App from "../App";
import Layout from "../layout";

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
    </Route>
  </Route>
);

export default routes;

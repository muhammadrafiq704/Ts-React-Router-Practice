import { Route } from "react-router-dom";
import RoutesData from "./RoutesData";
import App from "../App";
import Layout from "../layout";
import { lazy } from "react";
// import ErrorBoundary from "../components/ErrorBoundary";
import Laoder from "../pages/Products/loader";
import LoaderSingle from "../pages/SingleProduct/loader";
// eslint-disable-next-line react-refresh/only-export-components
const Products = lazy(() => import("../pages/Products"));
// eslint-disable-next-line react-refresh/only-export-components
const SingleProduct = lazy(() => import("../pages/SingleProduct"));
// eslint-disable-next-line react-refresh/only-export-components

const routes = (
  <Route
    path={RoutesData.ROOT}
    element={<App />}
    // errorElement={<ErrorBoundary />}
  >
    <Route element={<Layout />}>
      <Route
        path={RoutesData.PRODUCTS}
        element={<Products />}
        loader={Laoder}
      />
      <Route
        path={RoutesData.SINGLEPRODUCTS}
        loader={LoaderSingle}
        element={<SingleProduct />}
      />
    </Route>
  </Route>
);

export default routes;

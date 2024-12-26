import { Route } from "react-router-dom";
import RoutesData from "./RoutesData";
import App from "../App";
import Layout from "../layout";
// import ErrorBoundary from "../components/ErrorBoundary";
// import RootBoundary from "../components/ErrorBoundary";
import ErrorBoundary from "../components/ErrorBoundary";
// import CategoriesError from "../pages/Categories/CategoriesError";

const routes = (
  <Route
    path={RoutesData.ROOT}
    element={<App />}
    errorElement={<ErrorBoundary />}
  >
    <Route element={<Layout />}>
      <Route
        path={RoutesData.PRODUCTS}
        lazy={() => import("../pages/Products")}
      />
      <Route
        path={RoutesData.ADDPRODUCT}
        lazy={() => import("../pages/AddProduct/index")}
      />
      <Route
        path={RoutesData.SINGLEPRODUCTS}
        lazy={() => import("../pages/SingleProduct")}
      />
      <Route
        path={RoutesData.EDITPRODUCT}
        lazy={() => import("../pages/EditProduct")}
      />
      <Route
        path={RoutesData.CATEGORIES}
        // errorElement={<CategoriesError/>}
        lazy={() => import("../pages/Categories")}
      >
        <Route
        path={RoutesData.CATEGORY}
        lazy={()=> import ('../pages/Category')}
        />
      </Route>
    </Route>
  </Route>
);

export default routes;

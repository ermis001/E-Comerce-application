import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { useAppSelector } from "@src/hooks/reduxHooks";

const Home = lazy(() => import("@src/views/Home/Home"));
const CategoryPage = lazy(() => import("@src/views/CategoryPage/CategoryPage"));
const SubCategoryPage = lazy(
  () => import("@src/views/SubCategoryPage/SubCategoryPage")
);
const Dashboard = lazy(() => import("@src/views/Dashboard/Dashboard"));

function Routes() {
  const userConfig = useAppSelector((state) => state.userConfig);

  if (userConfig) {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/home/:category",
        element: <CategoryPage />,
      },
      {
        path: "/home/:category/:subCategory",
        element: <SubCategoryPage />,
      },
    ]);
    return <RouterProvider router={router} />;
  } else {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/home/:category",
        element: <CategoryPage />,
      },
      {
        path: "/home/:category/:subCategory",
        element: <SubCategoryPage />,
      },
    ]);
    return <RouterProvider router={router} fallbackElement={<Home />} />;
  }
}

export default Routes;

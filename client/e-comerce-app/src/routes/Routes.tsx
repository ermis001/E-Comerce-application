import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { useAppSelector } from "@hooks/reduxHooks";

import MainRoutes from "./MainRoutes";
import DashboardRoutes from "./DashboardRoutes";
import Loading from "@components/Loading/Loading";

const Home = lazy(() => import("@views/Home/Home"));

function Routes() {
  const userConfig = useAppSelector((state) => state.userConfig);

  if (userConfig) {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home/*",
        element: <MainRoutes />,
      },
      {
        path: "/dashboard/*",
        element: <DashboardRoutes />,
      },
    ]);
    return (
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    );
  } else {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home/*",
        element: <MainRoutes />,
      },
      {
        path: "/dashboard/*",
        element: <DashboardRoutes />,
      },
    ]);
    return (
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    );
  }
}

export default Routes;

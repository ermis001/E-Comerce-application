import { lazy, useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import type { Router } from "@remix-run/router";

import { useAppSelector } from "@src/hooks/reduxHooks";

const Home = lazy(() => import("@src/views/Home/Home"));

function DashboardRoutes() {
  const userConfig = useAppSelector((state) => state.userConfig);

  const router: Router = useMemo(() => {
    if (!userConfig?.userStatus && userConfig?.userStatus !== "member") {
      return createBrowserRouter([
        {
          path: "/dashboard",
          element: <Home />,
        },
        {
          path: "/dashboard/products",
          element: <Home />,
        },
      ]);
    } else if (userConfig?.userStatus === "owner") {
      return createBrowserRouter([
        {
          path: "/dashboard",
          element: <Home />,
        },
        {
          path: "/dashboard/users",
          element: <Home />,
        },
        {
          path: "/dashboard/products",
          element: <Home />,
        },
      ]);
    } else {
      return createBrowserRouter([]);
    }
  }, [userConfig]);

  return <RouterProvider router={router} />;
}

export default DashboardRoutes;

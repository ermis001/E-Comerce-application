import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "@views/Home/Home";
import CategoryPage from "@views/CategoryPage/CategoryPage";
import SubCategoryPage from "@views/SubCategoryPage/SubCategoryPage";
import PageFooter from "../footer/PageFooter";

function PageContent() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:category",
      element: <CategoryPage />,
    },
    {
      path: "/:category/:subCategory",
      element: <SubCategoryPage />,
    },
  ]);
  return (
    <Layout className="page-content">
      <Content className="page-content-container">
        <RouterProvider router={router} />
      </Content>
      <PageFooter />
    </Layout>
  );
}

export default PageContent;

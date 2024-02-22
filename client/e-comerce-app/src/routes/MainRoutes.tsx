import { lazy } from "react";
import { Layout } from "antd";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("@views/Home/Home"));
const CategoryPage = lazy(() => import("@views/CategoryPage/CategoryPage"));
const SubCategoryPage = lazy(
  () => import("@views/SubCategoryPage/SubCategoryPage")
);

function MainRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:subCategory" element={<SubCategoryPage />} />
      </Routes>
    </Layout>
  );
}

export default MainRoutes;

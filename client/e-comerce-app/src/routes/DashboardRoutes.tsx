import { lazy } from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";

import { DashboardSidebar } from "@components/index";

const Dashboard = lazy(() => import("@views/Dashboard/Dashboard"));
const Users = lazy(() => import("@views/Users/Users"));

function DashboardRoutes() {
  return (
    <Layout>
      <DashboardSidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<div>Products</div>} />
        <Route path="/categories" element={<div>Categories</div>} />
      </Routes>
    </Layout>
  );
}

export default DashboardRoutes;

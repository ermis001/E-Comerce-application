import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import Sider from "antd/es/layout/Sider";

import { useAppSelector } from "@src/hooks/reduxHooks";

function DashboardSidebar() {
  const darkMode = useAppSelector((state) => state.darkMode);
  const navigate = useNavigate();

  return (
    <Sider>
      <Menu
        theme={darkMode ? "dark" : "light"}
        inlineCollapsed={true}
        defaultSelectedKeys={["Dashboard"]}
        onClick={(e) => navigate(e.key)}
        items={[
          { key: "/dashboard", label: "Dashboard", title: "Dashboard" },
          { key: "/dashboard/users", label: "Users", title: "Users" },
          { key: "/dashboard/products", label: "Products", title: "Products" },
          {
            key: "/dashboard/categories",
            label: "Categories",
            title: "Categories",
          },
        ]}
      />
    </Sider>
  );
}

export default DashboardSidebar;

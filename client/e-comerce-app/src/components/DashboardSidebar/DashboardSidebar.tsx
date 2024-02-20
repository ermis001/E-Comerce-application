import { Menu } from "antd";

import { useAppSelector } from "@src/hooks/reduxHooks";
import Sider from "antd/es/layout/Sider";

function DashboardSidebar() {
  const darkMode = useAppSelector((state) => state.darkMode);
  return (
    <Sider>
      <Menu
        theme={darkMode ? "dark" : "light"}
        inlineCollapsed={true}
        defaultSelectedKeys={["Dashboard"]}
        onClick={(e)=> {
          console.log("menu: ", e)
          // Implement location navigation
        }}
        items={[
          { key: "/dashboard", label: "Dashboard", title: "Dashboard" },
          { key: "/dashboard/users", label: "Users", title: "Users" },
          { key: "/dashboard/products", label: "Products", title: "Products" },
          { key: "/dashboard/categories", label: "Categories", title: "Categories" },
        ]}
      />
    </Sider>
  );
}

export default DashboardSidebar;

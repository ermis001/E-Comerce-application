import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

import PageFooter from "../footer/PageFooter";
import Routes from "@components/routes/Routes";
import DashboardSidebar from "@components/DashboardSidebar/DashboardSidebar";

function PageContent() {
  return (
    <Layout className="page-content">
      {window.location.pathname.includes("dashboard") ? (
        <DashboardSidebar />
      ) : null}
      <Content className="page-content-container">
        <Routes />
      </Content>
      <PageFooter />
    </Layout>
  );
}

export default PageContent;

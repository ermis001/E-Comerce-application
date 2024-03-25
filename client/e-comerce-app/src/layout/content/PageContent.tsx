import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

import PageFooter from "../footer/PageFooter";
import Routes from "@routes/Routes";

function PageContent() {
  return (
    <Layout className="page-content">
      <Content className="page-content-container">
        <Routes />
      </Content>
      <PageFooter />
    </Layout>
  );
}

export default PageContent;

import { Layout } from "antd";

import PageHeader from "./header/PageHeader";
import PageContent from "./content/PageContent";

import "./PageLayout.scss";

function PageLayout() {
  return (
    <Layout className="page-layout">
      <PageHeader />
      <PageContent />
    </Layout>
  );
}

export default PageLayout;

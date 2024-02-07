import { Header } from "antd/es/layout/layout";

import MainNavigationButtons from "../../components/MainNavigationButtons/MainNavigationButtons";

function PageHeader() {
  return (
    <Header className="page-header">
      <section style={{ color: "#fff" }}>E-Comerce</section>
      <MainNavigationButtons />      
    </Header>
  );
}

export default PageHeader;

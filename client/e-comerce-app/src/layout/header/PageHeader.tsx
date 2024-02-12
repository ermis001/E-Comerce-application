import { Header } from "antd/es/layout/layout";

import MainNavigationButtons from "@components/MainNavigationButtons/MainNavigationButtons";
import { useAppSelector } from "@src/hooks/reduxHooks";

function PageHeader() {
  const darkMode = useAppSelector((state) => state.darkMode);
  return (
    <Header className={`page-header ${darkMode && "page-header-dark"}`}>
      <h2>E-Comerce</h2>
      <MainNavigationButtons />
    </Header>
  );
}

export default PageHeader;

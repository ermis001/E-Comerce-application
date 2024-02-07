import { ConfigProvider, theme } from "antd";
import PageLayout from "./layout/PageLayout";

import "./App.scss";

function App() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        // algorithm: theme.darkAlgorithm,
      }}
    >
      <PageLayout />
    </ConfigProvider>
  );
}

export default App;

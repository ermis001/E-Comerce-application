// import { useState } from "react";
// import { reactLogo, viteLogo } from "./assets";
// import CustomButton from "./components/Button/CustomButton";
import { ConfigProvider, theme } from "antd";
import PageLayout from "./layout/PageLayout";

import "./App.scss";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <ConfigProvider theme={{
      algorithm: theme.defaultAlgorithm,
    }}>
      <PageLayout />
    </ConfigProvider>
  );
}

export default App;

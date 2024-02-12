import { ConfigProvider } from "antd";
import PageLayout from "./layout/PageLayout";
import { lightTheme, darkTheme } from "@style/themeConfig";
import { useAppSelector } from "@hooks/reduxHooks";

import "./App.scss";

function App() {
  const darkMode = useAppSelector((state) => state.darkMode);

  return (
    <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
      <PageLayout />
    </ConfigProvider>
  );
}

export default App;

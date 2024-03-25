import { ConfigProvider } from "antd";
import PageLayout from "./layout/PageLayout";
import { lightTheme, darkTheme } from "@style/themeConfig";
import { useAtomValue } from "@store/customJotai/jotai";
import { darkModeAtom } from "@store/atoms";

import "./App.scss";

function App() {
  const darkMode = useAtomValue(darkModeAtom);

  return (
    <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
      <PageLayout />
    </ConfigProvider>
  );
}

export default App;

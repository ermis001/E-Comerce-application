import { ConfigProvider } from "antd";
import PageLayout from "./layout/PageLayout";
import { lightTheme, darkTheme } from "@style/themeConfig";

import "./App.scss";
import { useAppSelector } from "./hooks/reduxHooks";
import { Provider } from "react-redux";
import store from "./store/reducers/rootReducer";

function App() {
  const darkMode = useAppSelector(state => state.darkMode.value);
  console.log("darkMode: ", darkMode);
  return (
    <Provider store={store}>
    <ConfigProvider theme={darkMode ? darkTheme : lightTheme}>
      <PageLayout />
    </ConfigProvider>
    </Provider>
  );
}

export default App;

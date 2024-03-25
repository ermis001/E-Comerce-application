import { useState } from "react";
import { Button } from "antd";
import {
  MoonOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  SunOutlined,
  UserOutlined,
} from "@ant-design/icons";

import LogInModal from "@views/LogInModal/LogInModal";
import SingUpModal from "@views/SignUpModal/SignUpModal";
import stylingVariablesToggle from "@utils/stylingVariablesToggle";
import { darkModeAtom } from "@store/atoms";
import { useAtom } from "@store/customJotai/jotai";

import "./MainNavigationButtons.scss";

function MainNavigationButtons() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [userModal, setUserModal] = useState("");

  function toggle() {
    setDarkMode(!darkMode);
    stylingVariablesToggle(darkMode);
  }

  function setSignUp() {
    setUserModal("signup");
  }

  return (
    <nav className="main-navigation-buttons">
      <Button type="primary">
        <SearchOutlined />
      </Button>
      <Button type="primary" onClick={() => setUserModal("login")}>
        <UserOutlined />
      </Button>
      <Button type="primary">
        <ShoppingCartOutlined />
      </Button>
      <Button type="primary" onClick={toggle}>
        {darkMode ? <SunOutlined /> : <MoonOutlined />}
      </Button>
      {userModal === "login" && (
        <LogInModal
          open={userModal === "login"}
          onCancel={() => setUserModal("")}
          setSignUp={setSignUp}
        />
      )}
      {userModal === "signup" && (
        <SingUpModal
          open={userModal === "signup"}
          onCancel={() => setUserModal("")}
        />
      )}
    </nav>
  );
}

export default MainNavigationButtons;

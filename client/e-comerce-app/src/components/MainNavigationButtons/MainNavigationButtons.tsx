import { useState } from "react";
import { Button } from "antd";
import {
  MoonOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  SunOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { useAppDispatch, useAppSelector } from "@hooks/reduxHooks";
import { toggleDarkMode } from "@store/reducers/darkModeReducer";
import LogInModal from "@views/LogInModal/LogInModal";
import SingUpModal from "@views/SingUpModal/SingUpModal";

import "./MainNavigationButtons.scss";

function MainNavigationButtons() {
  const darkMode = useAppSelector((state) => state.darkMode);
  const [userModal, setUserModal] = useState("");

  const dispatch = useAppDispatch();

  function toggle() {
    dispatch(toggleDarkMode());
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

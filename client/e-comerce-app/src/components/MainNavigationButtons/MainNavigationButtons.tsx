import { useState } from "react";
import { Button } from "antd";

import { useAppDispatch } from "@hooks/reduxHooks";
import { toggleDarkMode } from "@store/reducers/darkModeReducer";
import LogInModal from "@views/LogInModal/LogInModal";
import SingUpModal from "@views/SingUpModal/SingUpModal";

import "./MainNavigationButtons.scss";

function MainNavigationButtons() {
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
      <Button type="primary">Search</Button>
      <Button type="primary" onClick={() => setUserModal("login")}>
        User
      </Button>
      <Button type="primary">Cart</Button>
      <Button type="primary" onClick={toggle}>
        DarkMode
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

import { useState } from "react";
import { Button } from "antd";

import LogInModal from "../../views/LogInModal/LogInModal";
import { toggleDarkMode } from "@src/store/reducers/darkModeReducer";

import "./MainNavigationButtons.scss";

function MainNavigationButtons() {
  const [userLogin, setUserLogin] = useState(false);
  return (
    <nav className="main-navigation-buttons">
      <Button type="primary">Search</Button>
      <Button type="primary" onClick={() => setUserLogin(true)}>
        User
      </Button>
      <Button type="primary">Cart</Button>
      <Button type="primary" onClick={() => toggleDarkMode()}>
        DarkMode
      </Button>
      {userLogin && (
        <LogInModal open={userLogin} onCancel={() => setUserLogin(false)} />
      )}
    </nav>
  );
}

export default MainNavigationButtons;

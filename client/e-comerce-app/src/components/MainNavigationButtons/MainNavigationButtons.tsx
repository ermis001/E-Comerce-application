import { useState } from "react";
import { Button } from "antd";

import LogInModal from "../../views/LogInModal/LogInModal";

import "./MainNavigationButtons.scss";

function MainNavigationButtons() {
  const [userLogin, setUserLogin] = useState(false);
  return (
    <nav className="main-navigation-buttons">
      <Button>Search</Button>
      <Button onClick={() => setUserLogin(true)}>User</Button>
      <Button>Cart</Button>
      {userLogin && (
        <LogInModal open={userLogin} onCancel={() => setUserLogin(false)} />
      )}
    </nav>
  );
}

export default MainNavigationButtons;

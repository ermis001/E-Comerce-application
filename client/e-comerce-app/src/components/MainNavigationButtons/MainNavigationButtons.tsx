// import { useState } from "react";
import { Button } from "antd";

import "./MainNavigationButtons.scss";

function MainNavigationButtons() {
  return (
    <nav className="main-navigation-buttons">
      <Button>Search</Button>
      <Button>User</Button>
      <Button>Cart</Button>
    </nav>
  );
}

export default MainNavigationButtons;

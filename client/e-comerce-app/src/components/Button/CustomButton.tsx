import { Button } from "antd";

import "./CustomButton.scss";

type buttonProps = {
  onClick: () => void;
  className: string | undefined;
  children: React.ReactNode;
  style: React.CSSProperties | undefined;
};

function CustomButton({
  onClick = () => {},
  className = "",
  children = "",
  style = {},
}: buttonProps) {
  return (
    <Button
      onClick={onClick}
      className={`customButton ${className}`}
      style={style}
    >
      {children}
    </Button>
  );
}

export default CustomButton;

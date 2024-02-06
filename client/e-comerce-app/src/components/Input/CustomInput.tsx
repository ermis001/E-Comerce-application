import { Input } from "antd";

import "./CustomInput.scss";

type inputProps = {
  id: string;
  className: string;
  addonAfter: "ReactNode";
  addonBefore: "ReactNode";
  allowClear: boolean;
  placeholder: string,
  defaultValue: string | number;
  disabled: boolean;
  value: string | number;
  style: React.CSSProperties;
  onChange: () => void;
  onPressEnter: () => void;
};

type InputPropsType = Partial<inputProps>

function CustomInput({
  id,
  className,
  addonAfter,
  addonBefore,
  allowClear,
  placeholder,
  defaultValue,
  disabled,
  value,
  style,
  onChange,
  onPressEnter,
}: InputPropsType) {
  return (
    <Input
      {...{
        id,
        className: `customInput ${className}`,
        addonAfter,
        addonBefore,
        allowClear,
        placeholder,
        defaultValue,
        disabled,
        value,
        style,
        onChange,
        onPressEnter,
      }}
    />
  );
}

export default CustomInput;

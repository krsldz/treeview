import React, { FC, memo } from "react";
import { CheckboxProps } from "./types";

const Checkbox: FC<CheckboxProps> = ({
  label,
  onChange,
  checked,
  disabled,
}) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <span>{label}</span>
    </div>
  );
};

export default memo(Checkbox);

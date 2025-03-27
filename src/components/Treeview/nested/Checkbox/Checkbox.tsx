import React, { FC, memo } from "react";
import { CheckboxProps } from "./types";

import "./Checkbox.css";

const Checkbox: FC<CheckboxProps> = ({
  label,
  onChange,
  checked,
  disabled,
  indeterminate,
}) => {
  return (
    <div className="checkboxWrap">
      <input
        type="checkbox"
        className={indeterminate ? "indeterminate" : ""}
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <span>{label}</span>
    </div>
  );
};

export default memo(Checkbox);

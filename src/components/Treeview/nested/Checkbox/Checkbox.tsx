import React, { FC, memo } from "react";
import clsx from "clsx";
import { CheckboxProps } from "./types";

import "./Checkbox.css";

const Checkbox: FC<CheckboxProps> = ({
  label,
  onChange,
  checked,
  disabled,
  indeterminate,
  classNames,
}) => {
  return (
    <div className={clsx("checkboxWrap", classNames.checkbox)}>
      <input
        type="checkbox"
        aria-label={label}
        className={
          indeterminate ? clsx("indeterminate", classNames.indeterminate) : ""
        }
        onChange={onChange}
        checked={checked}
        disabled={disabled}
      />
      <span className={classNames.label}>{label}</span>
    </div>
  );
};

export default memo(Checkbox);

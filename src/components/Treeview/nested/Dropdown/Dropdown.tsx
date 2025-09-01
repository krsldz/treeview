import React, { FC, memo } from "react";
import clsx from "clsx";
import { DropdownProps } from "./types";

import "./Dropdown.css";

const openIcon = "/chevronDown.svg";
const closeIcon = "/chevronLeft.svg";

const Dropdown: FC<DropdownProps> = ({ open, onClick, className }) => {
  return (
    <div className={clsx("dropdown", className)} onClick={onClick}>
      <img className="icon" src={open ? openIcon : closeIcon} alt="dropdown" />
    </div>
  );
};

export default memo(Dropdown);

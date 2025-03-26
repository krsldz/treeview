import React, { FC, memo } from "react";
import { DropdownProps } from "./types";

import "./Dropdown.css";

const openIcon = "/chevronDown.svg";
const closeIcon = "/chevronLeft.svg";

const Dropdown: FC<DropdownProps> = ({ open, onClick }) => {
  return (
    <div className="dropdown" onClick={onClick}>
      <img className="icon" src={open ? openIcon : closeIcon} alt="dropdown" />
    </div>
  );
};

export default memo(Dropdown);

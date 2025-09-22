import React, { FC, memo } from "react";
import clsx from "clsx";
import { DropdownProps } from "./types";
import { ReactComponent as OpenIcon } from "../../../../../public/chevronDown.svg";
import { ReactComponent as CloseIcon } from "../../../../../public/chevronLeft.svg";

import "./Dropdown.css";

const Dropdown: FC<DropdownProps> = ({ open, onClick, className }) => {
  return (
    <div className={clsx("dropdown", className)} onClick={onClick}>
      <div className="icon">{open ? <OpenIcon /> : <CloseIcon />}</div>
    </div>
  );
};

export default memo(Dropdown);

import React from "react";
import clsx from "clsx";
import { IconComponents } from "./types";

const folderClosed = "/folderClosed.svg";
const file = "file.svg";

export const DEFAULT_COMPONENTS: IconComponents = {
  parentIcon: <img className="folderIcon" src={folderClosed} alt="folder" />,
  childIcon: (
    <img className={clsx("folderIcon", "title")} src={file} alt="file" />
  ),
};

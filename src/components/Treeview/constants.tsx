import React from "react";
import clsx from "clsx";
import { IconComponents } from "./types";
import { ReactComponent as Folder } from "../../../public/folderClosed.svg";
import { ReactComponent as File } from "../../../public/file.svg";

export const DEFAULT_COMPONENTS: IconComponents = {
  parentIcon: (
    <div className="folderIcon">
      <Folder />
    </div>
  ),
  childIcon: (
    <div className={clsx("folderIcon", "title")}>
      <File />
    </div>
  ),
};

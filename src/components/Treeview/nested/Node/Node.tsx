import React, { FC, memo } from "react";
import clsx from "clsx";
import Checkbox from "../Checkbox";
import { NodeProps } from "./types";
import Dropdown from "../Dropdown";

import "./Node.css";

const folderOpened = "/folderOpened.svg";
const folderClosed = "/folderClosed.svg";
const file = "file.svg";

const Node: FC<NodeProps> = ({
  data,
  onlyRead,
  renderChildren,
  onToggle,
  onChange,
  selected,
  indeterminate,
  withIcons,
  classNames,
}) => {
  const { data: node, children, open, id } = data;
  const hasChildren = children.length > 0;

  return (
    <div className={clsx("nodeWrap", classNames.wrap)}>
      {hasChildren && (
        <Dropdown
          onClick={() => onToggle(id)}
          open={open}
          className={classNames.dropdown}
        />
      )}
      <div className={clsx("node", classNames.node)}>
        {onlyRead ? (
          <div className="titleBlock">
            {withIcons &&
              (hasChildren ? (
                <img
                  className="folderIcon"
                  src={open ? folderOpened : folderClosed}
                  alt="folder"
                />
              ) : (
                <img
                  className={clsx("folderIcon", "title")}
                  src={file}
                  alt="file"
                />
              ))}
            <span
              className={clsx(
                hasChildren || withIcons ? "" : "title",
                classNames.label
              )}>
              {node.title}
            </span>
          </div>
        ) : (
          <Checkbox
            indeterminate={indeterminate}
            checked={selected}
            classNames={{
              ...classNames,
              checkbox: clsx(classNames.checkbox, hasChildren ? "" : "title"),
            }}
            onChange={() => onChange(data)}
            label={node.title}
          />
        )}
        {open && hasChildren && <div>{renderChildren(children)}</div>}
      </div>
    </div>
  );
};

export default memo(Node);

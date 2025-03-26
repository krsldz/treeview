import React, { FC, memo } from "react";
import Checkbox from "../Checkbox";
import { NodeProps } from "./types";
import Dropdown from "../Dropdown";

import "./Node.css";

const Node: FC<NodeProps> = ({
  data,
  onlyRead,
  renderChildren,
  onToggle,
  onChange,
  selected,
}) => {
  const { data: node, children, open, id } = data;
  const hasChildren = children.length > 0;

  return (
    <div className="nodeWrap">
      {hasChildren && <Dropdown onClick={() => onToggle(id)} open={open} />}
      <div className="node">
        {onlyRead ? (
          <span className="title">{node.title}</span>
        ) : (
          <Checkbox
            checked={selected}
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

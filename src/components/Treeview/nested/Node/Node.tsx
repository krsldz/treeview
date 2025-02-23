import React, { FC, memo, ReactNode } from "react";
import Checkbox from "../Checkbox";
import { NodeProps } from "./types";

import styles from "./Node.module.scss";

const Node: FC<NodeProps> = ({
  data,
  onlyRead,
  renderChildren,
  onToggle,
  onChange,
  selected,
}) => {
  const { data: node, children, open, id } = data;

  return (
    <div className={styles.wrap}>
      {onlyRead ? (
        <span onClick={() => onToggle(id)}>{node.title}</span>
      ) : (
        <Checkbox
          checked={selected}
          onChange={() => onChange(data)}
          label={node.title}
        />
      )}
      {open && children.length > 0 && <div>{renderChildren(children)}</div>}
    </div>
  );
};

export default memo(Node);

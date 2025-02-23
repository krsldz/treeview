import React, { FC, memo, ReactNode } from "react";
// import clsx from "clsx";
import styles from "./Node.module.scss";
import { NodeProps } from "./types";

const Node: FC<NodeProps> = ({ data, onlyRead, renderChildren, onToggle }) => {
  const { data: node, children, open, id } = data;
  return (
    <div className={styles.wrap}>
      {onlyRead ? (
        <span onClick={() => onToggle(id)}>{node.title}</span>
      ) : (
        <div>
          <input type="checkbox" />
          <span>{node.title}</span>
        </div>
      )}
      {open && children.length > 0 && <div>{renderChildren(children)}</div>}
    </div>
  );
};

export default memo(Node);

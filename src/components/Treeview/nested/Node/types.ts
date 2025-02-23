import { ReactNode } from "react";
import { NodeItem, Value } from "../../types";

export type NodeProps = {
  data: NodeItem;
  onlyRead: boolean;
  selected: boolean;
  renderChildren: (children: Value[]) => ReactNode[];
  onToggle: (item: Value) => void;
  onChange: (node: NodeItem) => void;
};

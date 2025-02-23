import { ReactNode } from "react";
import { NodeItem, Value } from "../../types";

export type NodeProps = {
  data: NodeItem;
  onlyRead: boolean;
  renderChildren: (children: Value[]) => ReactNode[];
  onToggle: (item: Value) => void;
};

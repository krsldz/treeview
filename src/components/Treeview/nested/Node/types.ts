import { IconComponents } from "./../../types";
import { ReactNode } from "react";
import { CustomClassNames, NodeItem, Value } from "../../types";

export type NodeProps = {
  data: NodeItem;
  onlyRead: boolean;
  withIcons: boolean;
  selected: boolean;
  renderChildren: (children: Value[]) => ReactNode[];
  onToggle: (item: Value) => void;
  onChange: (node: NodeItem) => void;
  indeterminate?: boolean;
  classNames: Partial<CustomClassNames>;
  iconsComponents: IconComponents;
};

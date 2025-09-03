import { ReactNode } from "react";

export type Value = string | number;

export type EntityType = {
  id: Value;
  name: string;
};

export type NodeData = {
  title: string;
  value: Value;
  children?: NodeData[];
  id?: Value;
  icon?: ReactNode;
};

export type NodeItem = {
  data: NodeData;
  children: Value[];
  id: Value;
  parent: Value | null;
  open: boolean;
};

export type NodeMap = Record<string, NodeItem>;

export type TreeviewProps = {
  data: Array<NodeData>;
  onlyRead?: boolean;
  withIcons?: boolean;
  value?: EntityType[];
  onChange?: (value: EntityType[]) => void;
  classNames?: Partial<CustomClassNames>;
};

export type CustomClassNames = {
  wrap: string;
  node: string;
  label: string;
  dropdown: string;
  checkbox: string;
};

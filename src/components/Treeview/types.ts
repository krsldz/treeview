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
};

export type NodeItem = {
  data: NodeData;
  children: Value[];
  id: Value;
  parent: Value | null;
  open: boolean;
};

export type NodeMap = Record<string, NodeItem>;

export type TreeViewProps = {
  data: Array<NodeData>;
  onlyRead?: boolean;
  value?: EntityType[];
  onChange?: (value: EntityType[]) => void;
};

import React, {
  FC,
  memo,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { NodeMap, TreeViewProps, Value } from "./types";
import Node from "./nested/Node";
import { getNodeMap } from "./lib";

const Treeview: FC<TreeViewProps> = ({ data, onlyRead = true }) => {
  const [nodeMap, setNodeMap] = useState<NodeMap>({});
  const selected: Value[] = [];

  useLayoutEffect(() => {
    setNodeMap(getNodeMap(data, null, selected));
  }, []);

  const roots = useMemo(() => {
    return Object.keys(nodeMap).filter((key) => nodeMap[key].parent === null);
  }, [nodeMap]);

  const onToggle = useCallback(
    (id: Value): void => {
      const newNode = { ...nodeMap[id], open: !nodeMap[id].open };

      setNodeMap({ ...nodeMap, [id]: newNode });
    },
    [nodeMap]
  );

  const renderNode = (id: Value) => {
    const node = nodeMap[id];
    return (
      <Node
        key={id}
        data={node}
        onlyRead={onlyRead}
        renderChildren={(ids) => ids.map(renderNode)}
        onToggle={onToggle}
      />
    );
  };

  return <div>{roots.map(renderNode)}</div>;
};

export default memo(Treeview);

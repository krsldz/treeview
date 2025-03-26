import React, {
  FC,
  memo,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { EntityType, NodeItem, NodeMap, TreeViewProps, Value } from "./types";
import Node from "./nested/Node";
import { getNodeMap, getNodeValues, getUniqueValues } from "./lib";

import "./Treeview.css";

const Treeview: FC<TreeViewProps> = ({
  data,
  onChange,
  value = [],
  onlyRead = true,
}) => {
  const [nodeMap, setNodeMap] = useState<NodeMap>({});

  const selected = useMemo(() => {
    return value.map((i) => i.id);
  }, [value]);

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

  const handleChange = useCallback(
    (node: NodeItem): void => {
      if (!onChange) return;

      const { data, children, parent, id } = node;

      let ids = [data.value];
      let returnValue: EntityType[] = [{ id: data.value, name: data.title }];

      if (children) {
        ids = getNodeValues(nodeMap, id);
      }

      const childrenItems = data?.children?.map((i) => {
        return { id: i.value, name: i.title };
      });

      returnValue = childrenItems
        ? [...childrenItems, { id: data.value, name: data.title }]
        : [{ id: data.value, name: data.title }];

      const newValue = selected.includes(data.value)
        ? value.filter((item) => !ids.includes(item.id) && item.id !== parent)
        : getUniqueValues([...value, ...returnValue]);

      if (parent) {
        const parentNode = nodeMap[parent];
        const newValueIds = newValue.map((val) => val.id);
        const allChildrenSelected = parentNode.data.children?.every((child) =>
          newValueIds.includes(child.value)
        );
        if (allChildrenSelected) {
          returnValue = [
            { id: parentNode.data.value, name: parentNode.data.title },
          ];
          onChange([...newValue, ...returnValue]);
        } else {
          onChange(newValue);
        }
      } else {
        onChange(newValue);
      }
    },
    [value, nodeMap]
  );

  const renderNode = (id: Value) => {
    const node = nodeMap[id];
    const { data } = node;
    const isSelected = selected.includes(data.value);

    return (
      <Node
        key={id}
        data={node}
        onlyRead={onlyRead}
        renderChildren={(ids) => ids.map(renderNode)}
        onToggle={onToggle}
        onChange={handleChange}
        selected={isSelected}
      />
    );
  };

  return <div className="wrap">{roots.map(renderNode)}</div>;
};

export default memo(Treeview);

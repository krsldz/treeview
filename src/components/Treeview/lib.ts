import { NodeData, NodeItem, NodeMap, Value } from "./types";

/**
 * Form a nodes object
 * @param {NodeData[]} nodes - data array
 * @param {Value | null}  parentId - parent element id
 * @param {Value[]} values - chosen values array
 * @returns {NodeMap}
 */
export const getNodeMap = (
  nodes: NodeData[],
  parentId: Value | null,
  values: Value[]
): NodeMap => {
  return nodes.reduce((map, node) => {
    const { value, children, id } = node;
    const open =
      children?.some((option) => values.includes(option.value)) ||
      values.includes(value);

    const treeNode: NodeItem = {
      children:
        node.children?.map((option) =>
          option.id ? option.id : option.value
        ) ?? [],
      data: node,
      id: id || value,
      open,
      parent: parentId || null,
    };

    let childrenMap;

    if (children) childrenMap = getNodeMap(children, treeNode.id, values);

    return { ...map, ...childrenMap, [treeNode.id]: treeNode };
  }, {} as NodeMap);
};

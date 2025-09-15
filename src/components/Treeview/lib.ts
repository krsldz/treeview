import { EntityType, NodeData, NodeItem, NodeMap, Value } from "./types";

/**
 * Forms a nodes object
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

/**
 * Sets up an array of current node id and its children elements
 * @param {NodeMap} map - a map of all nodes
 * @param {Value}  id - id of current node
 * @returns {Value[]}
 */
export const getNodeValues = (map: NodeMap, id: Value): Value[] => {
  const { children, data } = map[id];

  return [
    data.value,
    ...children.reduce(
      (values, id) => [...values, ...getNodeValues(map, id)],
      [] as Value[]
    ),
  ];
};

/**
 * Sets up an array of unique values
 * @param {EntityType[]} arr - an array of chosen non-unique values
 * @returns {EntityType[]}
 */
export const getUniqueValues = (arr: EntityType[]): EntityType[] => {
  return [
    ...new Set(
      arr.map((item) => {
        const sortedObjectKeys = Object.keys(item).sort();
        const obj = Object.assign(
          {},
          ...sortedObjectKeys.map((i) => ({
            [i]: item[i as keyof typeof item],
          }))
        );
        return JSON.stringify(obj);
      })
    ),
  ].map((s) => JSON.parse(s));
};

/**
 *  Recursively flattens a tree structure into a single array of children nodes
 * @param {NodeData} data - a tree value
 * @returns {EntityType[]}
 */
export const flattenTree = (data: NodeData): EntityType[] => {
  if (!data) return [];

  let result: EntityType[] = [];

  if (data.children) {
    data.children.forEach((child) => {
      result.push({ id: child.value, name: child.title });
      result = result.concat(flattenTree(child));
    });
  }

  return result;
};

/**
 *  Recursively checks if any descendant is selected
 * @param {NodeData} node - a tree node
 * @param {Value[]} selected - an array of selected values
 * @returns {boolean}
 */
export const hasSelectedDescendants = (
  node: NodeData,
  selected: Value[]
): boolean => {
  if (!node.children) return false;

  return node.children.some(
    (child) =>
      selected.includes(child.value) || hasSelectedDescendants(child, selected)
  );
};

import { getNodeMap } from "../lib";
import { NodeData } from "../types";

describe("getNodeMap", () => {
  it("returns an empty object when node is empty", () => {
    expect(getNodeMap([], null, [])).toEqual({});
  });

  it("creates a map for a single node without children", () => {
    const nodes: NodeData[] = [{ value: 1, title: "Root" }];
    const map = getNodeMap(nodes, null, []);
    expect(map).toEqual({
      1: {
        id: 1,
        data: { value: 1, title: "Root" },
        parent: null,
        children: [],
        open: false,
      },
    });
  });

  it("creates a map with parent-child relationships", () => {
    const nodes: NodeData[] = [
      {
        value: 1,
        title: "Root",
        children: [{ value: 2, title: "Child" }],
      },
    ];

    const map = getNodeMap(nodes, null, []);
    expect(map).toEqual({
      1: {
        id: 1,
        data: {
          value: 1,
          title: "Root",
          children: [{ value: 2, title: "Child" }],
        },
        parent: null,
        children: [2],
        open: false,
      },
      2: {
        id: 2,
        data: { value: 2, title: "Child" },
        parent: 1,
        children: [],
        open: false,
      },
    });
  });

  it("sets open = true if node's value is in values", () => {
    const nodes: NodeData[] = [{ value: "a", title: "Node A" }];
    const map = getNodeMap(nodes, null, ["a"]);
    expect(map["a"].open).toBe(true);
  });

  it("sets open = true if any child value is in values", () => {
    const nodes: NodeData[] = [
      {
        value: "root",
        title: "Root",
        children: [{ value: "child", title: "Child" }],
      },
    ];
    const map = getNodeMap(nodes, null, ["child"]);
    expect(map["root"].open).toBe(true);
    expect(map["child"].open).toBe(true);
  });

  it("handles deep nesting with mixed id/value", () => {
    const nodes: NodeData[] = [
      {
        value: "r",
        title: "Root",
        children: [
          { id: "x", value: "ignored", title: "Custom ID" },
          { value: "y", title: "Normal Child" },
        ],
      },
    ];
    const map = getNodeMap(nodes, null, ["y"]);

    expect(map).toMatchObject({
      r: { children: ["x", "y"], parent: null, open: true },
      x: { id: "x", parent: "r", children: [] },
      y: { id: "y", parent: "r", children: [], open: true },
    });
  });

  it("handles a large tree without stack overflow", () => {
    const generateTree = (
      depth: number,
      breadth: number,
      prefix = "node"
    ): NodeData[] => {
      if (depth === 0) return [];

      return Array.from({ length: breadth }).map((_, i) => {
        const id = `${prefix}-${i}`;
        return {
          id,
          value: id,
          title: `Title ${id}`,
          children: generateTree(depth - 1, breadth, id),
        };
      });
    };

    const nodes = generateTree(5, 4);

    const map = getNodeMap(nodes, null, []);

    const countNodes = (tree: NodeData[]): number =>
      tree.reduce(
        (acc, n) => acc + 1 + (n.children ? countNodes(n.children) : 0),
        0
      );

    const expectedCount = countNodes(nodes);

    expect(Object.keys(map).length).toBe(expectedCount);

    const root = nodes[0];

    expect(map[root.id!].children.length).toBe(4);
  });
});

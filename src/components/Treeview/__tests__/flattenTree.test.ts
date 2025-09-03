import { flattenTree } from "../lib";
import { NodeData } from "../types";

describe("flattenTree", () => {
  it("returns an empty array when data is null", () => {
    expect(flattenTree(null as unknown as NodeData)).toEqual([]);
  });

  it("returns an empty array when node has no children", () => {
    const data: NodeData = { value: 1, title: "Root" };
    expect(flattenTree(data)).toEqual([]);
  });

  it("flattens a single level of children", () => {
    const data: NodeData = {
      value: 1,
      title: "Root",
      children: [
        { value: 2, title: "Child 1" },
        { value: 3, title: "Child 2" },
      ],
    };

    expect(flattenTree(data)).toEqual([
      { id: 2, name: "Child 1" },
      { id: 3, name: "Child 2" },
    ]);
  });

  it("flattens a deep nested tree", () => {
    const data: NodeData = {
      value: 1,
      title: "Root",
      children: [
        {
          value: 2,
          title: "Child 1",
          children: [
            {
              value: 4,
              title: "Grandchild 1",
              children: [{ value: 6, title: "Great Grandchild" }],
            },
          ],
        },
        {
          value: 3,
          title: "Child 2",
          children: [{ value: 5, title: "Grandchild 2" }],
        },
      ],
    };

    expect(flattenTree(data)).toEqual([
      { id: 2, name: "Child 1" },
      { id: 4, name: "Grandchild 1" },
      { id: 6, name: "Great Grandchild" },
      { id: 3, name: "Child 2" },
      { id: 5, name: "Grandchild 2" },
    ]);
  });

  it("handles multiple siblings at different nesting levels", () => {
    const data: NodeData = {
      value: "root",
      title: "Root",
      children: [
        { value: "a", title: "A", children: [{ value: "c", title: "C" }] },
        { value: "b", title: "B" },
      ],
    };

    expect(flattenTree(data)).toEqual([
      { id: "a", name: "A" },
      { id: "c", name: "C" },
      { id: "b", name: "B" },
    ]);
  });
});

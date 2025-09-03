import { getNodeValues } from "../lib";
import { NodeItem, NodeMap, Value } from "../types";

describe("getNodeValues", () => {
  const createNode = (
    id: Value,
    value: Value,
    title: string,
    children: Value[] = [],
    parent: Value | null = null
  ): NodeItem => ({
    id,
    data: { value, title },
    children,
    parent,
    open: true,
  });

  it("returns the value of a node with no children", () => {
    const map: NodeMap = {
      "1": createNode(1, 1, "item 1", []),
    };

    expect(getNodeValues(map, 1)).toEqual([1]);
  });

  it("returns the node value and its direct children values", () => {
    const map: NodeMap = {
      "1": createNode(1, 1, "pen", [2, 3]),
      "2": createNode(2, 2, "pencil", [], 1),
      "3": createNode(3, 3, "sharpie", [], 1),
    };

    expect(getNodeValues(map, 1)).toEqual([1, 2, 3]);
  });

  it("returns values from deep nested children", () => {
    const map: NodeMap = {
      "1": createNode(1, 1, "animals", [2]),
      "2": createNode(2, 2, "birds", [3], 1),
      "3": createNode(3, 3, "fish", [4], 2),
      "4": createNode(4, 4, "trees", [], 3),
    };

    expect(getNodeValues(map, 1)).toEqual([1, 2, 3, 4]);
  });

  it("handles multiple siblings and nested children correctly", () => {
    const map: NodeMap = {
      a: createNode("a", "a", "school", ["b", "c"]),
      b: createNode("b", "b", "university", ["d"], "a"),
      c: createNode("c", "c", "factory", [], "a"),
      d: createNode("d", "d", "office", [], "b"),
    };

    expect(getNodeValues(map, "a")).toEqual(["a", "b", "d", "c"]);
  });

  it("throws if id does not exist in map", () => {
    const map: NodeMap = {
      "1": createNode(1, 1, "item 1"),
    };

    expect(() => getNodeValues(map, 999)).toThrow();
  });
});

import { getUniqueValues } from "../lib";
import { EntityType } from "../types";

describe("getUniqueValues", () => {
  it("returns empty array for empty input", () => {
    expect(getUniqueValues([])).toEqual([]);
  });

  it("returns the same array if all values are unique", () => {
    const input: EntityType[] = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ];
    expect(getUniqueValues(input)).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ]);
  });

  it("removes duplicates when objects are identical", () => {
    const input: EntityType[] = [
      { id: 1, name: "Alice" },
      { id: 1, name: "Alice" },
    ];
    expect(getUniqueValues(input)).toEqual([{ id: 1, name: "Alice" }]);
  });

  it("removes duplicates even if object keys are in different order", () => {
    const input: EntityType[] = [
      { id: 1, name: "Alice" },
      { name: "Alice", id: 1 },
    ];
    expect(getUniqueValues(input)).toEqual([{ id: 1, name: "Alice" }]);
  });

  it("removes multiple duplicates and keeps unique values only", () => {
    const input: EntityType[] = [
      { id: 1, name: "Alice" },
      { name: "Alice", id: 1 },
      { id: 2, name: "Bob" },
      { id: 2, name: "Bob" },
    ];
    expect(getUniqueValues(input)).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ]);
  });

  it("treats different objects as unique", () => {
    const input: EntityType[] = [
      { id: 1, name: "Alice" },
      { id: 1, name: "Anne" },
    ];
    expect(getUniqueValues(input)).toEqual([
      { id: 1, name: "Alice" },
      { id: 1, name: "Anne" },
    ]);
  });
});

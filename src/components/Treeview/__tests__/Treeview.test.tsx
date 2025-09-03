import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Treeview from "../Treeview";
import { TreeviewProps } from "../types";

describe("Treeview component", () => {
  let user: ReturnType<typeof userEvent.setup>;
  let treeviewProps: TreeviewProps;

  beforeEach(() => {
    user = userEvent.setup();

    treeviewProps = {
      onlyRead: false,
      data: [
        {
          children: [
            { title: "Option 1-1", value: 11 },
            { title: "Option 1-2", value: 12 },
          ],
          title: "Option 1",
          value: 1,
        },
        {
          children: [
            { title: "Option 2-1", value: 21 },
            { title: "Option 2-2", value: 22 },
          ],
          title: "Option 2",
          value: 2,
        },
      ],
      onChange: jest.fn(),
      value: [{ id: 1, name: "Option 1" }],
    };
  });

  it("renders correctly", () => {
    const { asFragment } = render(<Treeview {...treeviewProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("selects an item when it is clicked", async () => {
    const { getByRole } = render(<Treeview {...treeviewProps} />);

    await user.click(getByRole("checkbox", { name: "Option 1-2" }));

    expect(treeviewProps.onChange).toHaveBeenCalledWith([
      {
        id: 1,
        name: "Option 1",
      },
      {
        id: 12,
        name: "Option 1-2",
      },
    ]);
  });

  it("deselects an item when it is clicked again", async () => {
    const { getByRole } = render(<Treeview {...treeviewProps} />);

    const checkbox = getByRole("checkbox", { name: "Option 1" });

    await user.click(checkbox);

    await user.click(checkbox);

    expect(treeviewProps.onChange).toHaveBeenCalledWith([]);
  });

  it("selects all child items when the parent is selected", async () => {
    const { getByRole } = render(<Treeview {...treeviewProps} />);

    await user.click(getByRole("checkbox", { name: "Option 2" }));

    expect(treeviewProps.onChange).toHaveBeenCalledWith([
      { id: 1, name: "Option 1" },
      { id: 21, name: "Option 2-1" },
      { id: 22, name: "Option 2-2" },
      { id: 2, name: "Option 2" },
    ]);
  });

  it("selects the parent when all of its children are selected", async () => {
    const { getByRole } = render(
      <Treeview {...treeviewProps} value={[{ id: 11, name: "Option 1-1" }]} />
    );

    await user.click(getByRole("checkbox", { name: "Option 1-2" }));

    expect(treeviewProps.onChange).toHaveBeenCalledWith([
      { id: 11, name: "Option 1-1" },
      { id: 12, name: "Option 1-2" },
      { id: 1, name: "Option 1" },
    ]);
  });
});

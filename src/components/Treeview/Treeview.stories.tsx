import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Treeview from "./Treeview";
import { useState } from "react";
import { EntityType } from "./types";

const meta: Meta<typeof Treeview> = {
  title: "UI/Treeview",
  component: Treeview,
  tags: ["autodocs"],
  parameters: {
    docs: {
      toc: {
        headingSelector: "h1, h2, h3",
        title: "Table of Contents",
        disable: false,
      },
    },
  },
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Treeview>;

export const Default: Story = {
  args: {
    data: [
      {
        title: "data 1",
        value: 1,
        children: [
          {
            title: "data 1 child 1",
            value: 11,
            children: [{ title: "data 1 child 1 child 1", value: 111 }],
          },
          { title: "data 1 child 2", value: 12 },
        ],
      },
      { title: "data 2", value: 2 },
      { title: "data 3", value: 3 },
    ],
  },
};

export const WithCheckbox: Story = {
  args: {
    onlyRead: false,
    data: [
      {
        title: "data 1",
        value: 1,
        children: [
          { title: "data 1 child 1", value: 11 },
          { title: "data 1 child 2", value: 12 },
        ],
      },
      { title: "data 2", value: 2 },
      { title: "data 3", value: 3 },
    ],
  },
  render: (args) => {
    const [value, setValue] = useState<EntityType[]>([]);

    const handleChange = (data: EntityType[]) => setValue(data);

    return <Treeview onChange={handleChange} value={value} {...args} />;
  },
};

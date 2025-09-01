import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Treeview from "./Treeview";
import { useState } from "react";
import { EntityType } from "./types";
import {
  ANIMAL_DATA_TREE,
  FILE_TREE,
  NATURE_TREE,
  ORGANIZATION_TREE,
} from "./constants";

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
    data: ANIMAL_DATA_TREE,
  },
};

export const WithCheckbox: Story = {
  args: {
    onlyRead: false,
    data: NATURE_TREE,
  },
  render: (args) => {
    const [value, setValue] = useState<EntityType[]>([]);

    const handleChange = (data: EntityType[]) => setValue(data);

    return <Treeview onChange={handleChange} value={value} {...args} />;
  },
};

export const WithIcon: Story = {
  args: {
    withIcons: true,
    data: FILE_TREE,
  },
  render: (args) => {
    const [value, setValue] = useState<EntityType[]>([]);

    const handleChange = (data: EntityType[]) => setValue(data);

    return <Treeview onChange={handleChange} value={value} {...args} />;
  },
};

export const WithCustomStyles: Story = {
  args: {
    onlyRead: false,
    data: ORGANIZATION_TREE,
  },
  render: (args) => {
    const [value, setValue] = useState<EntityType[]>([]);

    const handleChange = (data: EntityType[]) => setValue(data);

    return <Treeview onChange={handleChange} value={value} {...args} />;
  },
};

import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Treeview from "./Treeview";
import { EntityType } from "./types";
import {
  ANIMAL_DATA_TREE,
  FILE_TREE,
  NATURE_TREE,
  ORGANIZATION_TREE,
} from "./mocks";

import "./Treeview.css";

const meta: Meta<typeof Treeview> = {
  title: "UI/Treeview",
  component: Treeview,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ padding: "2rem" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `
A hierarchical **Treeview** component with support for selection, 
indeterminate states, and deep nesting.

### When to use
- For nested lists or categories
- For permission structures
- For file explorer–like UIs
        `,
      },
      toc: {
        headingSelector: "h1, h2, h3",
        title: "Table of Contents",
        disable: false,
      },
    },
  },
  argTypes: {
    data: {
      description: "Tree data structure containing hierarchical nodes.",
      control: "object",
      table: {
        type: { summary: "NodeData[]" },
      },
    },
    onlyRead: {
      description: "If true, disables selection and makes the tree read-only.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    withIcons: {
      description: "If true, renders icons for each node.",
      control: "boolean",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    value: {
      description: "Array of selected node values.",
      table: {
        type: { summary: "EntityType[]" },
        defaultValue: { summary: "[]" },
      },
    },
    onChange: {
      description: "Callback fired when selected values change.",
      table: {
        type: { summary: "(value: EntityType[]) => void" },
      },
    },
    classNames: {
      description: "Custom CSS class overrides for internal elements.",
      control: "object",
      table: {
        type: { summary: "Partial<CustomClassNames>" },
        defaultValue: { summary: "{}" },
      },
    },
  },
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

export const WithIcons: Story = {
  args: {
    withIcons: true,
    data: FILE_TREE,
  },
  render: (args) => {
    return <Treeview {...args} />;
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

    const classNames = {
      dropdown: "storyDropdown",
      label: "storyLabel",
      checkbox: "storyCheckbox",
      indeterminate: "indeterminate",
    };

    return (
      <Treeview
        onChange={handleChange}
        value={value}
        classNames={classNames}
        {...args}
      />
    );
  },
};

export const WithCustomIcons: Story = {
  args: {
    withIcons: true,
    data: ORGANIZATION_TREE,
    iconsComponents: {
      parentIcon: <span>📁</span>,
      childIcon: <span>📄</span>,
    },
  },
  render: (args) => {
    return <Treeview {...args} />;
  },
};

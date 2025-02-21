import type { Meta, StoryObj } from "@storybook/react";
import Treeview from "./Treeview";

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
  args: {},
};

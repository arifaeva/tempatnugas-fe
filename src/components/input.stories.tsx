import { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input";

const meta: Meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size for button",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputSmall: Story = {
  args: {
    size: "sm",
  },
};

export const InputMedium: Story = {
  args: {
    size: "md",
  },
};

export const InputLarge: Story = {
  args: {
    size: "lg",
  },
};

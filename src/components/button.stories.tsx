import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "tertiary",
        "quartenary",
        "outline",
        "ghost",
      ],
      description: "Variant for button",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size for button",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
  args: {
    children: "Button",
    variant: "primary",
  },
};

export const ButtonSecondary: Story = {
  args: {
    children: "Button",
    variant: "secondary",
  },
};

export const ButtonTertiary: Story = {
  args: {
    children: "Button",
    variant: "tertiary",
  },
};

export const ButtonQuartenary: Story = {
  args: {
    children: "Button",
    variant: "quartenary",
  },
};

export const ButtonOutline: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const ButtonGhost: Story = {
  args: {
    children: "Button",
    variant: "ghost",
  },
};

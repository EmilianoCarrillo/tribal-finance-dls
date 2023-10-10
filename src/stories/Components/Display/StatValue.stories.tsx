// StatValue.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import StatValue from "../../../components/Stat/StatValue";

const meta: Meta<typeof StatValue> = {
  title: "Display/Stat/StatValue",
  component: StatValue,
  argTypes: {
    value: {
      control: 'number',
      defaultValue: 1_000_000,
    },
    size: {
      options: ["lg", "md", "sm"],
      defaultValue: "md",
      control: { type: "select" },
    },
    variant: {
      options: ["strong", "subtle"],
      defaultValue: "subtle",
      control: { type: "select" },
    },
    numberStyle: {
      options: ["default", "tabular"],
      defaultValue: "default",
      control: { type: "select" },
    },
    currency: {
      control: { type: "text" },
      defaultValue: "USDC",
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatValue>;

export const Default: Story = {
  render: (args) => (
    <StatValue
      value={args.value}
      size={args.size}
      variant={args.variant}
      numberStyle={args.numberStyle}
      currency={args.currency}
    />
  ),
};

Default.args = {
  value: 1_000_000,
  size: "md",
  variant: "subtle",
  numberStyle: "tabular",
  currency: "USDC",
};

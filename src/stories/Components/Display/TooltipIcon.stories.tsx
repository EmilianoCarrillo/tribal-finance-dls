import type { Meta, StoryObj } from "@storybook/react";
import { TooltipIcon } from "../../../components/TooltipIcon";

const meta: Meta<typeof TooltipIcon> = {
  title: "Display/TooltipIcon",
  component: TooltipIcon,
  argTypes: {
    label: {
      control: { type: 'text'},
      defaultValue: 'This is a tooltip',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TooltipIcon>;

export const Default: Story = {
  render: (args) => (
    <TooltipIcon label={args.label} />
  ),
};

Default.args = {
  label: 'This is a tooltip',
};
// StatLabel.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import StatLabel from "../../../components/Stat/StatLabel";

const meta: Meta<typeof StatLabel> = {
  title: "Display/Stat/StatLabel",
  component: StatLabel,
  argTypes: {
    label: {
        control: { type: 'text'},
        defaultValue: 'Deposit amount',
        },
    size: {
        options: ['lg', 'md', 'sm'],
        defaultValue: 'md',
        control: { type: 'select'},
        },
    tooltip: {
        control: { type: 'text'},
        },
    },
};

export default meta;
type Story = StoryObj<typeof StatLabel>;

export const Default: Story = {
  render: (args) => (
    <StatLabel label={args.label} size={args.size} tooltip={args.tooltip}/>
  ),
};

Default.args = {
    label: 'Label',
    size: 'md',
    tooltip: 'This is a tooltip',
    };
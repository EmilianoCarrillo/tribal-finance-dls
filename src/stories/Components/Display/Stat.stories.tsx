import type { Meta, Story } from "@storybook/react";
import Stat from "../../../components/Stat/Stat";
import {StatLabel} from "../../../components/Stat/StatLabel";
import {StatValue} from "../../../components/Stat/StatValue";

const meta: Meta<typeof Stat> = {
  title: "Display/Stat/Stat",
  component: Stat,
};

export default meta;

export const Vertical: Story = (args) => (
  <Stat orientation='vertical' size={args.size}>
    <StatLabel label={args.label} tooltip={args.tooltip} />
    <StatValue
      value={args.value}
      currency={args.currency}
      numberStyle={args.numberStyle}
    />
  </Stat>
);

export const Horizontal: Story = (args) => (
  <Stat orientation='horizontal' size={args.size}>
    <StatLabel label={args.label} tooltip={args.tooltip} w='12rem'/>
    <StatValue
      value={args.value}
      currency={args.currency}
      numberStyle={args.numberStyle}
    />
  </Stat>
);

Vertical.args = {
  label: 'Deposit amount',
  value: 1_000_000,
  currency: 'USDC',
  tooltip: 'This is a tooltip',
};

Horizontal.args = {
  label: 'Deposit amount',
  tooltip: 'This is a tooltip',
  value: 1_000_000,
  currency: 'USDC',
  numberStyle: 'tabular'
};

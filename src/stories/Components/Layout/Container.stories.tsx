// Container.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Card, Center, Container } from "@chakra-ui/react";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    maxW: {
      options: ['container.sm', 'container.md', 'container.lg', 'container.xl'],
      defaultValue: 'container.xl',
      control: { type: 'select'},
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: (args) => (
    <Container bg='primary.100' {...args}>
      <Card h='xs'>
        <Center textStyle='body.small' color='fg.neutral-faded' h='full'>
          Card placeholder for visibility purposes
        </Center>
      </Card>
    </Container>
  ),
};

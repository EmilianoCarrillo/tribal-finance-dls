// Container.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Card, Container } from "@chakra-ui/react";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container bg='primary.100' maxW='container.xl'>
      <Card h='xs'></Card>
    </Container>
  ),
};

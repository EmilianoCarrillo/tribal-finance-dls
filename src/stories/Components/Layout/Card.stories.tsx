// card.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/react";

const meta: Meta<typeof Card> = {
  title: "Layout/Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        This is a title
      </CardHeader>
      <CardBody>This is the card body. It should always be used to generate the right card paddings even though the card doesn't have headings or footers.</CardBody>
      <CardFooter>This is the card footer</CardFooter>
    </Card>
  ),
};

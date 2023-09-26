// Typography.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

const meta: Meta<typeof TableContainer> = {
  title: "Design Foundations/Typography",
  component: TableContainer,
};

export default meta;
type Story = StoryObj<typeof TableContainer>;

export const Body: Story = {
  render: () => (
    <TableContainer
      bg="bg.elevation-raised"
      border="solid 1px"
      borderColor="border.neutral-faded"
      w="fit-content"
      borderRadius="lg"
    >
      <Table>
        <Thead>
          <Tr background="bg.neutral-faded">
            <Th>Sample</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td textStyle="body.small">Body small</Td>
            <Td textStyle="body.medium">
              Used sparingly for helper texts and footnotes.
            </Td>
          </Tr>
          <Tr>
            <Td textStyle="body.medium">Body medium</Td>
            <Td textStyle="body.medium">
              Default style. Commonly used for body texts.
            </Td>
          </Tr>
          <Tr>
            <Td textStyle="body.large">Body large</Td>
            <Td textStyle="body.medium">
              Default style for interactive component labels.
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  ),
};

export const HeadingsAndSubtitle: Story = {
  render: () => (
    <TableContainer
      bg="bg.elevation-raised"
      border="solid 1px"
      borderColor="border.neutral-faded"
      w="fit-content"
      borderRadius="lg"
    >
      <Table>
        <Thead>
          <Tr background="bg.neutral-faded">
            <Th>Sample</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td textStyle="subtitle">Subtitle</Td>
            <Td textStyle="body.medium">
              Commonly paired with heading styles to create subtitles for pages.
            </Td>
          </Tr>
          <Tr>
            <Td textStyle="heading.small">Heading small</Td>
            <Td textStyle="body.medium">
              Used for card headings and highlighted amounts in dashboards.
            </Td>
          </Tr>
          <Tr>
            <Td textStyle="heading.medium">Heading medium</Td>
            <Td textStyle="body.medium">
              Headings for user generated content such as pool names and
              Borrower / Lender names.
            </Td>
          </Tr>
          <Tr>
            <Td textStyle="heading.large">Heading large</Td>
            <Td textStyle="body.medium">Page headings.</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  ),
};

export const Display: Story = {
  render: () => (
    <TableContainer
      bg="bg.elevation-raised"
      border="solid 1px"
      borderColor="border.neutral-faded"
      w="fit-content"
      borderRadius="lg"
    >
      <Table size="lg">
        <Thead>
          <Tr background="bg.neutral-faded">
            <Th>Sample</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td textStyle="display.small">Display small</Td>
            <Td textStyle="body.medium">
              Third heading for mkt sites. Sparingly used for Display titles in
              product pages.
            </Td>
          </Tr>
          <Tr>
            <Td textStyle="display.medium">Display medium</Td>
            <Td textStyle="body.medium">
              Secondary heading in marketing sites.
            </Td>
          </Tr>
          <Tr>
            <Td textStyle="display.large">Display large</Td>
            <Td textStyle="body.medium">Main heading in marketing sites.</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  ),
};

export const Tabular: Story = {
  render: () => (
    <TableContainer
      bg="bg.elevation-raised"
      border="solid 1px"
      borderColor="border.neutral-faded"
      w="fit-content"
      borderRadius="lg"
    >
      <Alert status="warning">
        <AlertIcon />
        Storybook isn't loading the tabular style for Public Sans
      </Alert>
      <Table size="lg">
        <Thead>
          <Tr background="bg.neutral-faded">
            <Th>Sample</Th>
            <Th>Description</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td textStyle="tabular.small">123.56 Tabular small</Td>
            <Td textStyle="body.medium">
              For tables, charts, or any scenario where numbers are required to
              line up vertically.
            </Td>
          </Tr>
          <Tr>
            <Td textStyle="tabular.medium">123.56 Tabular medium</Td>
            <Td textStyle="body.medium">
              For tables, charts, or any scenario where numbers are required to
              line up vertically.
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  ),
};

{
  /* 
        <Text textStyle='tabular.small'>123.56 Tabular small</Text>
        <Text textStyle='tabular.medium'>123.56 Tabular medium</Text> */
}

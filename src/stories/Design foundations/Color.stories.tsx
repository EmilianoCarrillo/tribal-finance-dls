// Color.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  VStack,
} from "@chakra-ui/react";
import ColorSwatch from "../ColorSwatch";


const meta: Meta<typeof TableContainer> = {
  title: "Design Foundations/Color",
  component: TableContainer,
};

export default meta;
type Story = StoryObj<typeof TableContainer>;

export const Background: Story = {
  render: () => (
    <VStack spacing={4}>
        <ColorSwatch colorName='bg.neutral' />
        <ColorSwatch colorName='bg.neutral-active' />
        <ColorSwatch colorName='bg.neutral-faded' />
        <ColorSwatch colorName='bg.neutral-hover' />
        <ColorSwatch colorName='bg.primary' />
        <ColorSwatch colorName='bg.primary-active' />
        <ColorSwatch colorName='bg.primary-faded' />
        <ColorSwatch colorName='bg.primary-hover' />
        <ColorSwatch colorName='bg.positive' />
        <ColorSwatch colorName='bg.positive-active' />
        <ColorSwatch colorName='bg.positive-faded' />
        <ColorSwatch colorName='bg.positive-hover' />
        <ColorSwatch colorName='bg.critical' />
        <ColorSwatch colorName='bg.critical-active' />
        <ColorSwatch colorName='bg.critical-faded' />
        <ColorSwatch colorName='bg.critical-hover' />
        <ColorSwatch colorName='bg.caution' />
        <ColorSwatch colorName='bg.caution-faded' />
        <ColorSwatch colorName='bg.info' />
        <ColorSwatch colorName='bg.info-faded' />
</VStack>
  ),
};

export const Border: Story = {
  render: () => (
    <VStack spacing={4}>
        <ColorSwatch colorName='border.caution' />
        <ColorSwatch colorName='border.caution-faded' />
        <ColorSwatch colorName='border.critical' />
        <ColorSwatch colorName='border.critical-faded' />
        <ColorSwatch colorName='border.info' />
        <ColorSwatch colorName='border.info-faded' />
        <ColorSwatch colorName='border.neutral' />
        <ColorSwatch colorName='border.neutral-faded' />
        <ColorSwatch colorName='border.positive' />
        <ColorSwatch colorName='border.positive-faded' />
        <ColorSwatch colorName='border.primary' />
        <ColorSwatch colorName='border.primary-faded' />
    </VStack>
  ),
};


export const ForegroundAndOnBackground: Story = {
  render: () => (
<VStack spacing={4}>
        <ColorSwatch colorName='fg.caution' />
        <ColorSwatch colorName='fg.critical' />
        <ColorSwatch colorName='fg.info' />
        <ColorSwatch colorName='fg.neutral' />
        <ColorSwatch colorName='fg.neutral-faded' />
        <ColorSwatch colorName='fg.positive' />
        <ColorSwatch colorName='fg.primary' />
        <ColorSwatch colorName='on-bg.caution' />
        <ColorSwatch colorName='on-bg.critical' />
        <ColorSwatch colorName='on-bg.info' />
        <ColorSwatch colorName='on-bg.positive' />
        <ColorSwatch colorName='on-bg.primary' />
    </VStack>
      ),
    };

    export const PageAndElevation: Story = {
      render: () => (
        <VStack spacing={4}>
        <ColorSwatch colorName='bg.page' />
        <ColorSwatch colorName='bg.elevation-raised' />
    </VStack>
          ),
        };

        export const Persistent: Story = {
          render: () => (
            <VStack spacing={4}>
            <ColorSwatch colorName='black' />
            <ColorSwatch colorName='white' />
        </VStack>
              ),
            };
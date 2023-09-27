import { tableAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const baseStyle = definePartsStyle({
  th: {
    backgroundColor: "gray.50",
    color: "gray.500",
  },
});

const variants = {
  noHeader: {
    th: {
      backgroundColor: "transparent",
      color: "foreground.fg-neutral-faded",
      textTransform: "none",
    },
  },
};

export const tableTheme = defineMultiStyleConfig({
  baseStyle,
  variants,
});

import { sliderAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  thumb: {
    width: "24px",
    height: "24px",
    backgroundColor: "primary.500",
    borderRadius: "full",
    borderColor: "white",
    borderWidth: "2px",
  },

  track: {
    height: "4px",
    backgroundColor: "gray.200",
  },

  filledTrack: {
    backgroundColor: "primary.500",
  },
});

export const sliderTheme = defineMultiStyleConfig({ baseStyle });

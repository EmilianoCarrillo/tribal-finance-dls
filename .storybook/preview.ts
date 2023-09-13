import type { Preview } from "@storybook/react";
import theme from "../src/theme/index";


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fffs',
        },
        {
          name: 'dark',
          value: '#18181B',
        },
      ],
    },
    chakra: {
      theme,
    },
  },
};

export default preview;

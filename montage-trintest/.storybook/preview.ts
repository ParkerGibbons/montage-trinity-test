import type { Preview } from "@storybook/svelte";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

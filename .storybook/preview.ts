import type { Preview } from "@storybook/react-vite";
import "../src/theme/token-primitives.css";
import "../src/theme/token-semantic.css";
import "../src/theme/token-color.css";
import "../src/theme/token-shape.css";
import { themePresets, applyThemePreset } from "../src/theme";
applyThemePreset(themePresets[0]);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;

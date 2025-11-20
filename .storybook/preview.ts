import type { Preview } from "@storybook/react-vite";

// 1. Primitives (기본 값들)
import "../src/theme/token-primitives.css";

// 2. Color Primitives (색상 팔레트)
import "../src/theme/token-colors-theme.css"; // 회사 전용 6색
import "../src/theme/token-colors-primitives.css"; // Radix Gray 스케일
import "../src/theme/token-colors-accent.css"; // Radix Accent 색상

// 3. Semantic & Mode (변환 레이어)
import "../src/theme/token-semantic.css"; // 용도별 매핑
import "../src/theme/token-color.css"; // Light/Dark 모드

// 4. Shape & Layout
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

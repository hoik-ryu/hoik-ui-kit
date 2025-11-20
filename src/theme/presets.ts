// src/theme/presets.ts

export type AccentScheme = "yellow" | "jade" | "blue" | "purple";
export type GrayScheme = "gray" | "jade" | "bronze";
export type BackgroundScheme = "gray" | "sand";
export type Mode = "light" | "dark";
export type Shape = "sharp" | "soft" | "round";

export type ThemePreset = {
  id: string;
  label: string;
  mode: Mode;
  accent: AccentScheme;
  gray: GrayScheme;
  background: BackgroundScheme;
  shape: Shape;
};

export const themePresets: ThemePreset[] = [
  {
    id: "light-soft-yellow-gray",
    label: "Light / Soft / Yellow / Gray",
    mode: "light",
    accent: "yellow",
    gray: "gray",
    background: "gray",
    shape: "soft",
  },
  {
    id: "light-soft-jade-gray",
    label: "Light / Soft / Jade / Gray",
    mode: "light",
    accent: "jade",
    gray: "gray",
    background: "gray",
    shape: "soft",
  },
  {
    id: "dark-soft-blue-gray",
    label: "Dark / Soft / Blue / Gray",
    mode: "dark",
    accent: "blue",
    gray: "gray",
    background: "gray",
    shape: "soft",
  },
  {
    id: "dark-round-purple-bronze",
    label: "Dark / Round / Purple / Bronze",
    mode: "dark",
    accent: "purple",
    gray: "bronze",
    background: "sand",
    shape: "round",
  },
];

export function applyThemePreset(
  preset: ThemePreset,
  target: HTMLElement = document.documentElement
) {
  target.dataset.mode = preset.mode;
  target.dataset.accent = preset.accent;
  target.dataset.gray = preset.gray;
  target.dataset.background = preset.background;
  target.dataset.shape = preset.shape;
}

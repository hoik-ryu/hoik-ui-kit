// src/theme/presets.ts
export type ColorScheme = "teal" | "green" | "yellow" | "gray" | "purple";
export type Shape = "sharp" | "soft" | "round";
export type Mode = "light" | "dark";

export type ThemePreset = {
  id: string;
  label: string;
  mode: Mode;
  color: ColorScheme;
  shape: Shape;
};

export const themePresets: ThemePreset[] = [
  {
    id: "light-soft-teal",
    label: "Light / Soft / Teal",
    mode: "light",
    color: "teal",
    shape: "soft",
  },
  {
    id: "light-soft-green",
    label: "Light / Soft / Green",
    mode: "light",
    color: "green",
    shape: "soft",
  },
  {
    id: "dark-soft-teal",
    label: "Dark / Soft / Teal",
    mode: "dark",
    color: "teal",
    shape: "soft",
  },
  {
    id: "dark-soft-yellow",
    label: "Dark / Soft / Yellow",
    mode: "dark",
    color: "yellow",
    shape: "soft",
  },
  {
    id: "light-round-teal",
    label: "Light / Round / Teal",
    mode: "light",
    color: "teal",
    shape: "round",
  },
];

export function applyThemePreset(
  preset: ThemePreset,
  target: HTMLElement = document.documentElement
) {
  target.dataset.mode = preset.mode;
  target.dataset.color = preset.color;
  target.dataset.shape = preset.shape;
}

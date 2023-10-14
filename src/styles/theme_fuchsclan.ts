import {
  BrandVariants,
  Theme,
  createLightTheme,
  createDarkTheme,
} from "@fluentui/react-components";

export const fuchsclanThemes: BrandVariants = {
  10: "#020404",
  20: "#111A1C",
  30: "#182C2F",
  40: "#1C393D",
  50: "#20464C",
  60: "#24545B",
  70: "#27636B",
  80: "#2A717B",
  90: "#2D808C",
  100: "#30909D",
  110: "#32A0AE",
  120: "#34B0C0",
  130: "#35C0D2",
  140: "#51CFE0",
  150: "#85DAE7",
  160: "#ADE6EF",
};

export const fc_lightTheme: Theme = {
  ...createLightTheme(fuchsclanThemes),
};

export const fc_darkTheme: Theme = {
  ...createDarkTheme(fuchsclanThemes),
};

fc_darkTheme.colorBrandForeground1 = fuchsclanThemes[110];
fc_darkTheme.colorBrandForeground2 = fuchsclanThemes[120];

import createTheme, { Settings } from "@uiw/codemirror-themes";
import {
  abcdef,
  abyss,
  androidstudio,
  andromeda,
  atomone,
  aura,
  basicDark,
  basicLight,
  bbedit,
  bespin,
  copilot,
  duotoneDark,
  duotoneLight,
  dracula,
  darcula,
  eclipse,
  githubDark,
  githubLight,
  gruvboxDark,
  gruvboxLight,
  kimbie,
  material,
  materialDark,
  materialLight,
  monokai,
  monokaiDimmed,
  noctisLilac,
  nord,
  okaidia,
  quietlight,
  red,
  solarizedDark,
  solarizedLight,
  sublime,
  tokyoNight,
  tokyoNightStorm,
  tokyoNightDay,
  vscodeDark,
  whiteDark,
  whiteLight,
  tomorrowNightBlue,
  xcodeDark,
  xcodeLight,
  defaultSettingsVscodeDark,
} from "@uiw/codemirror-themes-all";

const defaultTheme = createTheme({
  theme: "dark",
  settings: {
    ...defaultSettingsVscodeDark,
    background: "#00000000",
    gutterBackground: "#00000000",
    fontFamily: defaultSettingsVscodeDark.fontFamily,
  },
  styles: [],
});

export const themes = [
  {
    label: "default",
    value: defaultTheme,
  },
  {
    label: "abcdef",
    value: abcdef,
  },
  {
    label: "abyss",
    value: abyss,
  },
  {
    label: "androidstudio",
    value: androidstudio,
  },
  {
    label: "andromeda",
    value: andromeda,
  },
  {
    label: "atomone",
    value: atomone,
  },
  {
    label: "aura",
    value: aura,
  },
  {
    label: "basicDark",
    value: basicDark,
  },
  {
    label: "basicLight",
    value: basicLight,
  },
  {
    label: "bbedit",
    value: bbedit,
  },
  {
    label: "bespin",
    value: bespin,
  },
  {
    label: "copilot",
    value: copilot,
  },
  {
    label: "duotoneDark",
    value: duotoneDark,
  },
  {
    label: "duotoneLight",
    value: duotoneLight,
  },
  {
    label: "dracula",
    value: dracula,
  },
  {
    label: "darcula",
    value: darcula,
  },
  {
    label: "eclipse",
    value: eclipse,
  },
  {
    label: "githubDark",
    value: githubDark,
  },
  {
    label: "githubLight",
    value: githubLight,
  },
  {
    label: "gruvboxDark",
    value: gruvboxDark,
  },
  {
    label: "gruvboxLight",
    value: gruvboxLight,
  },
  {
    label: "kimbie",
    value: kimbie,
  },
  {
    label: "material",
    value: material,
  },
  {
    label: "materialDark",
    value: materialDark,
  },
  {
    label: "materialLight",
    value: materialLight,
  },
  {
    label: "monokai",
    value: monokai,
  },
  {
    label: "monokaiDimmed",
    value: monokaiDimmed,
  },
  {
    label: "noctisLilac",
    value: noctisLilac,
  },
  {
    label: "nord",
    value: nord,
  },
  {
    label: "okaidia",
    value: okaidia,
  },
  {
    label: "quietlight",
    value: quietlight,
  },
  {
    label: "red",
    value: red,
  },
  {
    label: "solarizedDark",
    value: solarizedDark,
  },
  {
    label: "solarizedLight",
    value: solarizedLight,
  },
  {
    label: "sublime",
    value: sublime,
  },
  {
    label: "tokyoNight",
    value: tokyoNight,
  },
  {
    label: "tokyoNightStorm",
    value: tokyoNightStorm,
  },
  {
    label: "tokyoNightDay",
    value: tokyoNightDay,
  },
  {
    label: "vscodeDark",
    value: vscodeDark,
  },
  {
    label: "whiteDark",
    value: whiteDark,
  },
  {
    label: "whiteLight",
    value: whiteLight,
  },
  {
    label: "tomorrowNightBlue",
    value: tomorrowNightBlue,
  },
  {
    label: "xcodeDark",
    value: xcodeDark,
  },
  {
    label: "xcodeLight",
    value: xcodeLight,
  },
];

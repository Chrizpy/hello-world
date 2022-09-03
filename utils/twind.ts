import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";

const dottedBackground = "url(/svg/small_dot.svg)";
const nanumPenScriptImport =
  `url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap')`;

export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      backgroundImage: {
        "dotted-background": dottedBackground,
      },
      colors: {
        "banner": "#B5F9F1",
      },
      fontFamily: {
        "nanum": ["Nanum Pen Script"],
      },
    },
  },
  preflight: {
    "@import": nanumPenScriptImport,

    "@font-face": [
      {
        fontFamily: "Nanum Pen Script",
        fontWeight: "400",
      },
    ],
  },
};

if (IS_BROWSER) setup(config);

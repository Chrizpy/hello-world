import { Options } from "$fresh/plugins/twind.ts";

const nanumPenScriptImport =
  `url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap')`;

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
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
} as Options;

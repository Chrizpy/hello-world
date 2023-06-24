import { Options } from "$fresh/plugins/twind.ts";

const nanumPenScriptImport =
  `url('https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap')`;

export default {
  selfURL: import.meta.url,
  theme: {
    screens: {
      "phone": "414px",
      "tablet": "900px",
      "laptop": "1279px",
      "desktop": "1441px",
    },
    extend: {
      colors: {
        "banner": "#B5F9F1",
      },
      fontFamily: {
        "nanum": ["Nanum Pen Script"],
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "rotate(0deg)", transformOrigin: "50% 50%" },
          "20%": { transform: "rotate(20deg)" },
          "30%, 50%, 70%": { transform: "rotate(-10deg)" },
          "40%, 60%, 80%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        shake: "shake 2.5s ease 0s infinite normal none",
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

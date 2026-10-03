import type { Config } from "tailwindcss";

export default {
  content: ["./{components,islands,routes}/**/*.{ts,tsx}"],
  theme: {
    screens: {
      phone: "414px",
      tablet: "900px",
      laptop: "1279px",
      desktop: "1441px",
    },
    extend: {
      colors: {
        banner: "#B5F9F1",
      },
      fontFamily: {
        nanum: ["Nanum Pen Script"],
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
} satisfies Config;

import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        platypi: ["var(--font-platypi)"],
        inter: ["var(--font-inter)"],
      },
      colors: {
        primary: {
          red: "#F31260",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;

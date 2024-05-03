import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#0989FF",
        topHeadingPriamry: "#010f1c",
        topHeadingSecondary: "#021d35",
        pink: "#FD4B5B"
      },

      container: {
        center: true,
        padding: "15px",
      },
    }
  },
  plugins: [],
};
export default config;

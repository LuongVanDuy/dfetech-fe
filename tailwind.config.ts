import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          sm: "100%",
          md: "640px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1680px",
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: "rgba(73, 80, 87, 1)",
        customGreen: "rgba(44, 118, 86, 1)",
      },
      boxShadow: {
        white: "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -2px rgba(255, 255, 255, 0.1)",
      },
      screens: {
        sm: "375px",
        md: "769px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;

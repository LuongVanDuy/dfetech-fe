import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customGray: "rgba(73, 80, 87, 1)",
        customGreen: "rgba(44, 118, 86, 1)",
      },
      boxShadow: {
        white:
          "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -2px rgba(255, 255, 255, 0.1)",
      },
      screens: {
        sm: "375px", // Mobile screens
        md: "769px", // Tablets
        lg: "1024px", // Laptops
        xl: "1280px", // Desktops
        "2xl": "1536px", // Large desktops
      },
    },
  },
  plugins: [],
};
export default config;

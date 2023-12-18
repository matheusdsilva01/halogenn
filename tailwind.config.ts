import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)"],
        roboto: ["var(--font-roboto)"],
      },
      maxWidth: {
        "7xl": "1312px",
      },
      colors: {
        primary: "#323351",
        secondary: "#F9F0EE",
        tertiary: "#F5643D",
      },
      boxShadow: {
        shadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config

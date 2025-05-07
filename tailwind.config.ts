import type { Config } from "tailwindcss";
import scrollbarHide from 'tailwind-scrollbar-hide'

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        montserrat: ['Montserrat']
      },
      boxShadow: {
        'bottom-dark': '0px 4px 6px rgba(0, 0, 0, 0.95)',
      }
    },
  },
  plugins: [scrollbarHide],
} satisfies Config;

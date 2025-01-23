import type { Config } from "tailwindcss";

export default {
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
      boxShadow: {
        'inner-lg': 'inset 0px 10px 30px rgba(255, 255, 255, 0.1)', 
        'inner-xl': 'inset 0 15px 40px rgba(255, 255, 255, 0.1)', 
      },
    },
  },
  plugins: [],
} satisfies Config;

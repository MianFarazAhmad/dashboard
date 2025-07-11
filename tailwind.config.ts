import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
      colors: {
        sidebar: {
          active: "#68CFF7",
          iconColor: "#636c80",
        },
      },
      fontSize: {
  '10': '0.625rem',
  '11': '0.6875rem',
  '12': '0.75rem',
  '13': '0.8125rem',
  '14': '0.875rem',
  '15': '0.9375rem',
  '16': '1rem',
  '17': '1.0625rem',
  '18': '1.125rem',
  '19': '1.1875rem',
  '20': '1.25rem',
  '21': '1.3125rem',
  '22': '1.375rem',
  '23': '1.4375rem',
},
  fontWeight: {
        '1': '100',  // Thin
        '2': '200',  // Extra Light
        '3': '300',  // Light
        '4': '400',  // Normal
        '5': '500',  // Medium
        '6': '600',  // Semi Bold
        '7': '700',  // Bold
        '8': '800',  // Extra Bold
        '9': '900',  // Black
        '10': '950'  // Extra Black (if your font supports it)
      }

    },
  },
  plugins: [],
};
export default config;

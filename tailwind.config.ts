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
        light: "#F9FAFB",
        brand: "#68CFF7",
        brand1:'#F0FAFE',
        brand2:"#191D310D",
        sidebar: {
          active: "#68CFF7",
          default:'#555555B2',
          iconColor: "#636c80",
        },
      },
      // 👇 pull borderColor out here, not inside `colors`
      borderColor: {
        brand: "#191D310D",
      },
      fontSize: {
        "10": "0.625rem",
        "11": "0.6875rem",
        "12": "0.75rem",
        "13": "0.8125rem",
        "14": "0.875rem",
        "15": "0.9375rem",
        "16": "1rem",
        "17": "1.0625rem",
        "18": "1.125rem",
        "19": "1.1875rem",
        "20": "1.25rem",
        "21": "1.3125rem",
        "22": "1.375rem",
        "23": "1.4375rem",
        "24":"1.5rem",
        "25":" 1.5625rem"
      },
      fontWeight: {
        "1": "100",
        "2": "200",
        "3": "300",
        "4": "400",
        "5": "500",
        "6": "600",
        "7": "700",
        "8": "800",
        "9": "900",
        "10": "950",
      },
    },
  },
  plugins: [],
};

export default config;

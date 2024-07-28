import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        'infinite-scroll-up': 'infinite-scroll-up 50s linear infinite',
        'infinite-scroll-down': 'infinite-scroll-down 50s linear infinite',
      },
      keyframes: {
        'infinite-scroll-up': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-100%)' },
        },
        'infinite-scroll-down': {
          from: { transform: 'translateY(-100%)' },
          to: { transform: 'translateY(0)' },
        }
        
      } 
    },
  },
  plugins: [],
};
export default config;


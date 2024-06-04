import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'mountain-meadow': {
          50:  '#ebfef7',
          100: '#d0fbeb',
          200: '#a4f6db',
          300: '#6aebc9',
          400: '#2ed9b1',
          500: '#0abd99',
          600: '#009b7f',
          700: '#007c69',
          800: '#036253',
          900: '#035146',
          950: '#012d29',
        },
        'corduroy': {
          50 : '#f5f8f7',
          100: '#e0e7e7',
          200: '#c0cfce',
          300: '#99afae',
          400: '#738e8d',
          500: '#577070',
          600: '#465b5b',
          700: '#3a4b4b',
          800: '#313e3e',
          900: '#2c3535',
          950: '#161c1d',
        },
        shimmerGradientStart: '#d0fbeb',
        shimmerGradientMid: '#2ed9b1',
        shimmerGradientEnd: '#d0fbeb',
      },
    },
  plugins: [],
  }
};
export default config;

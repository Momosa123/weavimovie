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
        "green-radial": "radial-gradient(circle, #A8E063, #2fab58)",
        "green-gradient": "linear-gradient(to bottom right, #A8E063, #56AB2F)",
        "custom-green-gradient":
          "linear-gradient(to left, rgb(182, 244, 146), rgb(51, 139, 147))",
      },
    },
  },
  plugins: [],
};
export default config;

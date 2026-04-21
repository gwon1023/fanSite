import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Georgia", "Times New Roman", "serif"],
        body: ["Segoe UI Variable Text", "Malgun Gothic", "sans-serif"],
      },
      boxShadow: {
        haze: "0 16px 60px rgba(0, 0, 0, 0.34)",
        ember: "0 0 40px rgba(139, 17, 22, 0.18)",
      },
      backgroundImage: {
        "radial-blood":
          "radial-gradient(circle at center, rgba(139,17,22,0.18) 0%, rgba(139,17,22,0) 62%)",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
        InterTight: ["Inter Tight", "sans-serif"],
      },
      colors: {
        bg: "var(--bg)",
        c2: "var(--c2)",
        bgD: "var(--bg-d)",
        acc1: "var(--acc1)",
        acc2: "var(--acc2)",
        acc3: "var(--acc3)",
        acc4: "var(--acc4)",
        acc5: "var(--acc5)",
        glass: "var(--glass)",
        glass2: "var(--glass2)",
        td: "var(--td)",
        tl: "var(--tl)",
        white20: "var(--white20)",
        gray: "var(--gray)",
        gray50: "var(--gray50)",
        dark75: "var(--dark75)",
        darkNav: "var(--darkNav)",
        hover1: "var(--hover1)",
        white80: "var(--white80)",
        stop1: "var(--stop1)",
        green: "var(--green)",
        bdr: "var(--bdr)",
        grad: "var(--grad)",
        grad2: "var(--grad2)",
        grad3: "var(--grad3)",
      },
    },
  },
  plugins: [],
};
export default config;

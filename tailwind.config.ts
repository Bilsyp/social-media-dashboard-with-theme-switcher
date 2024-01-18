import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        Poppins: ["var(--poppins)", "sans-serif"],
        Inter: ["var(--inter)", "sans-serif"],
      },
      colors: {
        very_dark_blue_bg: "rgb(30, 32, 42)",
        very_dark_blue_top_bg_pattern: "hsl(232, 19%, 15%)",
        dark_desaturate_blue_card_bg: "rgb(37, 42, 65)",
        desaturated_blue_text: "hsl(228, 34%, 66%)",
        white_text: "hsl(0, 0%, 100%)",
        /* Light */
        white_bg: "hsl(0, 0%, 100%)",
        very_pale_blue_top_bg_pattern: "hsl(225, 100%, 98%)",
        light_grayish_blue_card_bg: "hsl(227, 47%, 96%)",
        dark_grayish_blue_text: "rgb(99, 104, 126)",
        very_dark_blue_text: "rgb(30, 32, 42)",

        lime_green: "rgb(29, 180, 137)",
        bright_red: "rgb(220, 65, 76)",

        facebook: "rgb(25, 143, 245)",
        twitter: "rgb(28, 160, 242)",
        // instagram: linear-gradient(rgb(253, 196, 104) to rgb(223, 73, 150))"

        youtube: "rgb(196, 3, 42)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

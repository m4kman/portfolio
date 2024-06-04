import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
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
        main: ["var(--font-mona-sans)"],
        chakra: ["var(--font-chakra-petch)"],
        dancing: ["var(--font-dancing-script)"],
      },
      backgroundImage: {
        noise: "url(/assets/noisee.png)",
      },
      colors: {
        // border: "hsl(var(--border))",
        // input: "hsl(var(--input))",
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
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      typography: ({ theme }) => ({
        main: {
          css: {
            "--tw-prose-body": theme("colors.slate[300]"),
            "--tw-prose-headings": theme("colors.foreground"),
            "--tw-prose-lead": theme("colors.gray[700]"),
            "--tw-prose-links": theme("colors.rose[900]"),
            "--tw-prose-bold": theme("colors.rose[700]"),
            "--tw-prose-counters": theme("colors.pink[600]"),
            "--tw-prose-bullets": theme("colors.rose[500]"),
            "--tw-prose-hr": theme("colors.rose[300]"),
            "--tw-prose-quotes": theme("colors.rose[900]"),
            "--tw-prose-quote-borders": theme("colors.rose[300]"),
            "--tw-prose-captions": theme("colors.rose[700]"),
            "--tw-prose-code": theme("colors.rose[900]"),
            "--tw-prose-pre-code": theme("colors.rose[100]"),
            "--tw-prose-pre-bg": theme("colors.rose[900]"),
            "--tw-prose-th-borders": theme("colors.rose[300]"),
            "--tw-prose-td-borders": theme("colors.rose[200]"),
            "--tw-prose-invert-body": theme("colors.slate[700]"),
            "--tw-prose-invert-headings": theme("colors.foreground"),
            "--tw-prose-invert-lead": theme("colors.gray[300]"),
            "--tw-prose-invert-links": theme("colors.sky[500]"),
            "--tw-prose-invert-bold": theme("colors.rose[900]"),
            "--tw-prose-invert-counters": theme("colors.rose[600]"),
            "--tw-prose-invert-bullets": theme("colors.rose[400]"),
            "--tw-prose-invert-hr": theme("colors.rose[300]"),
            "--tw-prose-invert-quotes": theme("colors.rose[900]"),
            "--tw-prose-invert-quote-borders": theme("colors.rose[300]"),
            "--tw-prose-invert-captions": theme("colors.pink[700]"),
            "--tw-prose-invert-code": theme("colors.rose[900]"),
            "--tw-prose-invert-pre-code": theme("colors.rose[300]"),
            "--tw-prose-invert-pre-bg": "rgb(255 255 255 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.rose[300]"),
            "--tw-prose-invert-td-borders": theme("colors.rose[700]"),
          },
        },
      }),
      borderRadius: {
        DEFAULT: "var(--radius)",
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
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc( -100% - 2rem ))" },
        },
        blob: {
          "0%": {
            transform: "scale(1)",
          },
          "33%": {
            transform: "scale(1.2)",
          },
          "66%": {
            transform: "scale(0.85)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "blob-horizontal": {
          "0%": {
            transform: "translate(0,0)",
          },
          "33%": {
            transform: "translate(-100%, 25%)",
          },
          "66%": {
            transform: "translate(100%, -25%)",
          },
          "100%": {
            transform: "translate(0,0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 20s linear infinite",
        blob: "blob 12s infinite",
        "meteor-effect": "meteor 5s linear infinite",
        "blob-horizontal": "blob-horizontal 15s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;

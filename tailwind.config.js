export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "color-mix(in oklab, var(--foreground) 70%, transparent)",
        accent: "var(--accent)",
        border: "var(--border)",
        ring: "var(--ring)",
        card: "var(--card)",
        destructive: "oklch(0.65 0.18 18)",
        lavender: {
          50: "var(--lavender-50)",
          100: "var(--lavender-100)",
          200: "var(--lavender-200)",
          300: "var(--lavender-300)",
          400: "var(--lavender-400)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
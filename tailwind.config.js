/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        nacelle: ["var(--font-nacelle)", "sans-serif"],
      },
      fontSize: {
        xs: [
          "0.8125rem",
          {
            lineHeight: "1.5384",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.5715",
          },
        ],
        base: [
          "0.9375rem",
          {
            lineHeight: "1.5333",
            letterSpacing: "-0.0125em",
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.0125em",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.5",
            letterSpacing: "-0.0125em",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "1.415",
            letterSpacing: "-0.0268em",
          },
        ],
        "3xl": [
          "1.75rem",
          {
            lineHeight: "1.3571",
            letterSpacing: "-0.0268em",
          },
        ],
        "4xl": [
          "2.5rem",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.0268em",
          },
        ],
        "5xl": [
          "3.5rem",
          {
            lineHeight: "1",
            letterSpacing: "-0.0268em",
          },
        ],
        "6xl": [
          "4rem",
          {
            lineHeight: "1",
            letterSpacing: "-0.0268em",
          },
        ],
        "7xl": [
          "4.5rem",
          {
            lineHeight: "1",
            letterSpacing: "-0.0268em",
          },
        ],
      },
      colors: {
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
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        shine: "shine 5s ease-in-out 500ms infinite",
        glow: "glow 2s ease-in-out infinite",
        rippling: "rippling var(--duration) ease-out",
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        gradient: "gradient 8s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        "background-position-spin":
          "background-position-spin 3000ms infinite alternate",
        float: "float 3s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "slide-down": "slideDown 0.3s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
        },
        pulseGlow: {
          "0%, 100%": {
            opacity: 0.6,
          },
          "50%": {
            opacity: 1,
          },
        },
        slideDown: {
          "0%": {
            transform: "translateY(-10%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        shine: {
          "0%": {
            top: "0",
            transform: "scaleY(5)",
            opacity: "0",
          },
          "10%": {
            opacity: ".8",
          },
          "20%": {
            top: "100%",
            transform: "scaleY(10)",
            opacity: "0",
          },
          "100%": {
            top: "100%",
            transform: "scaleY(1)",
            opacity: "0",
          },
        },
        gradient: {
          to: {
            "background-position": "200% center",
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        rippling: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "background-position-spin": {
          "0%": {
            backgroundPosition: "top center",
          },
          "100%": {
            backgroundPosition: "bottom center",
          },
        },
        glow: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 rgba(0,0,0,0.1)",
          },
          "50%": {
            transform: "scale(1.02)",
            boxShadow: "0 0 20px rgba(102, 126, 234, 0.6)",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-animate")],
};

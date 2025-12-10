/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // -------------------
      // CUSTOM FONTS
      // -------------------
      fontFamily: {
        circular: ["var(--font-circular)", "sans-serif"],
        productsans: ["var(--font-productsans)", "sans-serif"],
      },

      // -------------------
      // FONT SIZES FROM FIGMA
      // -------------------
      fontSize: {
        "h1-hero": ["72px", { lineHeight: "86px", letterSpacing: "-0.02em" }],
        "h2-section": ["48px", { lineHeight: "58px" }],
        "h3-subsection": ["24px", { lineHeight: "32px" }],
        "body-lg": ["20px", { lineHeight: "32px" }],
        body: ["16px", { lineHeight: "24px" }],
        "body-sm": ["14px", { lineHeight: "20px" }],
        nav: ["16px", { lineHeight: "24px" }],
        button: ["18px", { lineHeight: "26px" }],
        price: ["18px", { lineHeight: "26px" }],
      },

      letterSpacing: {
        tightminus: "-0.02em",
        widefaceoil: "-21px",
      },

      // -------------------
      // CUSTOM COLORS (FUNCTIONAL)
      // -------------------
      colors: {
        "hero-bg": "#DDC0AE",
        "hero-text": "#383838",
        "hero-deco-text": "rgba(56,56,56,0.05)",
        "hero-accent": "#C18D6B",

        "button-bg": "#A05F3F",
        "button-text": "#FFFFFF",

        "about-bg": "#FFFFFF",
        "about-text": "#383838",
        "about-dot": "#A6613B",

        "testimonial-bg": "#FFFFFF",
        "testimonial-text": "#383838",
        "testimonial-muted": "#7A7A7A",
        "testimonial-shadow-color": "rgba(41, 77, 118, 0.08)",

        "companies-bg": "#FAFAFA",

        "footer-bg": "#DDC0AE",
        "footer-text": "#383838",
      },

      // -------------------
      // SPACING FROM FIGMA
      // -------------------
      spacing: {
        "section-y": "120px",
        "section-y-sm": "96px",
        "section-x": "160px",
        inner: "40px",
        "max-content": "1200px",

        "gap-sm": "16px",
        "gap-md": "24px",
        "gap-lg": "32px",
        "gap-xl": "48px",
        "gap-xxl": "64px",

        "hero-pt": "160px",
        "hero-pl": "80px",
        "hero-title-mb": "32px",
        "hero-text-mb": "40px",
        "hero-button-gap": "24px",
      },

      // -------------------
      // BORDER RADII
      // -------------------
      borderRadius: {
        md: "8px",
        lg: "16px",
      },

      // -------------------
      // SHADOWS
      // -------------------
      boxShadow: {
        testimonial: "0px 20px 50px rgba(41, 77, 118, 0.08)",
      },
    },
  },
  plugins: [],
  safelist: [
    // Allow arbitrary positions generated from Figma
    {
      pattern: /(left|right|top|bottom)-\[[\d\.]+px\]/,
    },
    {
      pattern: /(w|h)-\[[\d\.]+px\]/,
    },
    {
      pattern: /(rotate)-\[-?\d+deg\]/,
    },
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: {
          "100": "#e6dfdf",
          "200": "#e5dfdf",
        },
        darkmagenta: "#a516a8",
        gray: "#8c8787",
        black: "#000",
        fuchsia: {
          "100": "#e42ee7",
          "200": "#e415e8",
        },
        darkgray: {
          "100": "#a8a5a5",
          "200": "#a9a4a4",
        },
        mediumorchid: {
          "100": "#a843cc",
          "200": "#c036ae",
        },
        darkorchid: {
          "100": "#9a25c4",
          "200": "#8c06bd",
        },
        snow: "#fffbfb",
        "main-paragraf": "#9a9696",
        silver: "#c5c3c3",
        thistle: "#e5cde9",
        darkviolet: "#af1ddf",
      },
      spacing: {},
      fontFamily: {
        mainpragraf: "Mulish",
      },
      borderRadius: {
        xl: "20px",
        "lgi-5": "19.5px",
        "281xl": "300px",
      },
    },
    fontSize: {
      mini: "15px",
      base: "16px",
      xl: "20px",
      "13xl": "32px",
      "12xl-2": "31.2px",
      "mini-6": "14.6px",
      xs: "12px",
      "17xl": "36px",
      "29xl": "48px",
      "16xl": "35px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

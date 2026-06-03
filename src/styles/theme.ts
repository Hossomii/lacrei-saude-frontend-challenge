import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  colors: {
    background: {
      default: "#FFFFFF",
      subtle: "#F5F5F5",
      disabled: "#D9D9D9",

      accent: "#018762",
      accentHover: "#016A4D",
    },

    text: {
      heading: "#1A1A1A",
      body: "#4D4D4D",
      accent: "#018762",
      disabled: "#9E9E9E",
    },

    border: {
      default: "#D9D9D9",
      accent: "#018762",
    },
  },

  spacing: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },

  breakpoints: {
    sm: "600px",
    md: "1024px",
    lg: "1200px",
    xl: "1536px",
  },
};
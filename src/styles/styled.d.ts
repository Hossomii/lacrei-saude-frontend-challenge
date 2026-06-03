import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: {
        default: string;
        subtle: string;
        disabled: string;
        accent: string;
        accentHover: string;
      };

      text: {
        heading: string;
        body: string;
        accent: string;
        disabled: string;
      };

      border: {
        default: string;
        accent: string;
      };
    };

    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };

    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
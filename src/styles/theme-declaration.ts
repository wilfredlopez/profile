import { CreateCSSProperties } from "@material-ui/core/styles/withStyles";
// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      primary: string;
      primaryContrast: string;
      secondary: string;
      secondaryContrast: string;
      light: string;
      dark: string;
    };
  }
}

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    status: {
      danger: React.CSSProperties["color"];
    };
    classes: {
      imageBackDrop: CreateCSSProperties;
    };
  }
  interface ThemeOptions {
    status: {
      danger: React.CSSProperties["color"];
    };
    classes: {
      imageBackdrop: CreateCSSProperties;
    };
  }
}

declare module "@material-ui/core/styles/createPalette" {
  export interface Palette {
    tertiary: PaletteColor;
  }
  export interface PaletteOptions {
    tertiary: PaletteColorOptions;
  }
}

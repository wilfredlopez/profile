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

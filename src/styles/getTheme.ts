import { common, green, red } from "@material-ui/core/colors";
import primary from "@material-ui/core/colors/blueGrey";
import secondary from "@material-ui/core/colors/teal";
import {
  createMuiTheme,
} from "@material-ui/core/styles";
import { DefaultTheme } from "styled-components";
export const SECONDARY_COLOR = secondary[500];
export const SECONDARY_COLOR_CONTRAST = common["white"];
export let PRIMARY_COLOR: string = primary[900];
export const TOOLBAR_MIN_HEIGHT = 15;
export const PRIMARY_COLOR_CONTRAST = common["white"];
export const DARK_COLOR = "#040c14";
export const LIGHT_COLOR = common["white"];
const BORDER_RADIOUS = 4;

export default function getTheme(prefersDarkMode = false) {
  PRIMARY_COLOR = prefersDarkMode ? "#60a0c7" : primary[900];

  const theme = createMuiTheme({
    status: {
      danger: red[500],
    },
    classes: {
      imageBackdrop: {
        position: "absolute",
        left: 0,
        borderRadius: BORDER_RADIOUS,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: common["black"],
        opacity: 0.4,
        // transition: theme.transitions.create("opacity"),
      },
    },
    palette: {
      type: prefersDarkMode ? "dark" : "light",
      primary: {
        main: PRIMARY_COLOR,
        contrastText: PRIMARY_COLOR_CONTRAST,
      },
      secondary: {
        main: SECONDARY_COLOR,

        contrastText: SECONDARY_COLOR_CONTRAST,
      },
      tertiary: {
        main: "#c47070",
        dark: "#914345",
        light: "#f9a09e",
        contrastText: PRIMARY_COLOR_CONTRAST,
      },
      success: {
        ...green,
        main: "#689f38",
      },
      background: {
        default: "#303030",
      },
    },
    shape: {
      borderRadius: BORDER_RADIOUS,
    },
    spacing: 16,
    props: {
      MuiPaper: {
        elevation: 3,
      },
      MuiTextField: {
        InputLabelProps: {
          shrink: true,
        },
      },
      MuiButton: {
        disableRipple: true,
      },
      MuiCheckbox: {
        disableRipple: true,
      },
    },
    overrides: {
      MuiPaper: {
        root: {
          color: prefersDarkMode ? "#d2d2d2" : common["white"],
          backgroundColor: prefersDarkMode ? "#2c2c2c" : "#303030",
        },
      },
      MuiMobileStepper: {
        root: {
          backgroundColor: "transparent",
        },
        positionBottom: {
          position: "absolute",
        },
      },
      MuiAppBar: {
        positionFixed: {
          zIndex: 1000,
        },
      },
      MuiToolbar: {
        gutters: {
          minHeight: TOOLBAR_MIN_HEIGHT,
          "@media (min-width: 600px)": {
            minHeight: TOOLBAR_MIN_HEIGHT,
          },
        },
        regular: {
          minHeight: TOOLBAR_MIN_HEIGHT,
          "@media (min-width: 600px)": {
            minHeight: TOOLBAR_MIN_HEIGHT,
          },
        },
        root: {
          minHeight: TOOLBAR_MIN_HEIGHT,
          "@media (min-width: 600px)": {
            minHeight: TOOLBAR_MIN_HEIGHT,
          },
        },
      },
      MuiFilledInput: {
        root: {
          backgroundColor: "transparent",
        },
      },
      MuiInputLabel: {
        root: {
          backgroundColor: "transparent",
        },
      },
      MuiButton: {
        root: {
          textTransform: "none",
        },
      },
    },
  });

  theme.palette.tertiary = theme.palette.augmentColor({
    main: "#c47070",
    dark: "#914345",
    light: "#f9a09e",
    contrastText: PRIMARY_COLOR_CONTRAST,
  });
  return theme;
}

export const styledComponentsTheme: DefaultTheme = {
  borderRadius: "5px",
  colors: {
    primary: PRIMARY_COLOR,
    primaryContrast: PRIMARY_COLOR_CONTRAST,
    secondary: SECONDARY_COLOR,
    secondaryContrast: SECONDARY_COLOR_CONTRAST,
    dark: DARK_COLOR,
    light: LIGHT_COLOR,
  },
};

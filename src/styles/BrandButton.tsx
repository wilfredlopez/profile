import React, { PropsWithChildren } from "react";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

interface Styles {
  color: string;
  children: React.ReactNode;
  [key: string]: any;
}

interface ColorsMapping {
  default: string;
  blue: string;
  [key: string]: any;
}

interface SizesMapping {
  default: string;
  small: string;
  large: string;
  [key: string]: any;
}
export type PaletteColorKeys =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "tertiary"
  | "success";

interface ButtonStyles extends WithStyles<typeof styles> {
  color: "default" | "text" | "blue" | PaletteColorKeys;
  size?: "small" | "default" | "large";
  /**
         * The content of the button.
         */
  children?: React.ReactNode;
  /**
           * If `true`, the button will be disabled.
           */
  disabled?: boolean;
  /**
           * If `true`, no elevation is used.
           */
  disableElevation?: boolean;
  /**
           * If `true`, the  keyboard focus ripple will be disabled.
           */
  disableFocusRipple?: boolean;
  /**
           * Element placed after the children.
           */
  endIcon?: React.ReactNode;
  /**
           * If `true`, the button will take up the full width of its container.
           */
  fullWidth?: boolean;
  /**
           * The URL to link to when the button is clicked.
           * If defined, an `a` element will be used as the root node.
           */
  href?: string;
  /**
           * Element placed before the children.
           */
  startIcon?: React.ReactNode;
  /**
           * The variant to use.
           */
  variant?: "text" | "outlined" | "contained";
}

const DEFAULT_SHADOW =
  "0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)";
// Like https://github.com/brunobertolini/styled-by
const styledByColor = (property: string, mapping: ColorsMapping) =>
  (props: Styles) => mapping[props[property]];
const styledBySize = (property: string, mapping: SizesMapping) =>
  (props: Styles) => mapping[props[property]];

const styles = (theme: Theme) => ({
  root: {
    background: styledByColor("color", {
      default: "#00796b",
      blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      primary: theme.palette.primary.dark,
      secondary: theme.palette.secondary.main,
      success: theme.palette.success.main,
      error: theme.palette.error.main,
      warning: theme.palette.warning.main,
      tertiary: theme.palette.tertiary.main,
      text: "inherit",
    }),
    borderRadius: theme.shape.borderRadius,
    border: 0,
    color: styledByColor("color", {
      default: "#fff",
      blue: "#fff",
      primary: theme.palette.primary.contrastText,
      secondary: theme.palette.secondary.contrastText,
      success: theme.palette.success.contrastText,
      error: theme.palette.error.contrastText,
      warning: theme.palette.warning.contrastText,
      tertiary: theme.palette.tertiary.contrastText,
      text: theme.palette.getContrastText(theme.palette.text.primary),
    }),
    height: styledBySize("size", {
      default: "40px",
      large: "48px",
      small: "20px",
    }),
    padding: styledBySize("size", {
      default: theme.spacing(0.5, 1),
      large: theme.spacing(1.5, 1.5),
      small: theme.spacing(1, 0.5),
    }),
    cursor: "pointer",
    ["&:hover"]: {
      background: styledByColor("color", {
        default: "rgb(0, 84, 74)",
        blue: "linear-gradient(45deg, rgb(0 137 247) 30%, rgb(10 138 168) 90%)",
        primary: theme.palette.primary.main,
        secondary: theme.palette.secondary.dark,
        success: theme.palette.success.dark,
        error: theme.palette.error.dark,
        warning: theme.palette.warning.dark,
        tertiary: theme.palette.tertiary.dark,
        text: theme.palette.text.primary,
      }),
    },
    boxShadow: styledByColor("color", {
      default: DEFAULT_SHADOW,
      blue: "rgba(33, 203, 243, 0.3) 1px 2px 1px 1px",
      primary: theme.shadows[1],
      secondary: theme.shadows[2],
      success: theme.shadows[4],
      error: theme.shadows[2],
      warning: theme.shadows[2],
      tertiary: theme.shadows[2],
      text: theme.shadows[2],
    }),
  },
});

export const BrandButton = withStyles(styles)((
  { classes, size, children, color, ...other }: PropsWithChildren<
    ButtonStyles
  >,
) => (
  <Button className={classes.root} {...other}>{children}</Button>
));

import React, { PropsWithChildren } from "react";
import { Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

interface Styles {
  color: string;
  children: React.ReactNode;
  [key: string]: any;
}

interface ColorsMapping {
  default: string;
  blue: string;
  vape: string;
  [key: string]: any;
}

interface SizesMapping {
  default: string | number;
  small: string | number;
  large: string | number;
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
  ref?: any;
  color:
    | "vape"
    | "expense"
    | "shop"
    | "default"
    | "text"
    | "blue"
    | PaletteColorKeys;
  size?: "medium" | "large" | "small" | "default";
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

const borderStart = "1px solid ";
// Like https://github.com/brunobertolini/styled-by
const styledByColor = (property: string, mapping: ColorsMapping) =>
  (props: Styles) => mapping[props[property]];
const styledBySize = (property: string, mapping: SizesMapping) =>
  (props: Styles) => mapping[props[property]];

const styles = (theme: Theme) => ({
  color: {
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
      vape: "#fff",
      expense: "#fff",
      shop: "#fff",
    }),
  },
  colorOutline: {
    color: styledByColor("color", {
      default: "rgb(20, 20, 20)",
      blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      success: theme.palette.success.main,
      error: theme.palette.error.main,
      warning: theme.palette.warning.main,
      tertiary: theme.palette.tertiary.main,
      text: "inherit",
      vape: "#ff1f00",
      expense: "#2e9e7a",
      shop: "rgb(20, 20, 20)",
    }),
    ["&:hover a, &:hover"]: {
      color: styledByColor("color", {
        default: "rgb(20, 20, 20)",
        blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
        primary: theme.palette.primary.dark,
        secondary: theme.palette.secondary.dark,
        success: theme.palette.success.dark,
        error: theme.palette.error.dark,
        warning: theme.palette.warning.dark,
        tertiary: theme.palette.tertiary.dark,
        text: "inherit",
        vape: "#ff1f00",
        expense: "#2e9e7a",
        shop: "rgb(20, 20, 20)",
      }),
    },
  },
  background: {
    background: styledByColor("color", {
      default: "#000",
      blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      success: theme.palette.success.main,
      error: theme.palette.error.main,
      warning: theme.palette.warning.main,
      tertiary: theme.palette.tertiary.main,
      text: "inherit",
      vape: "#ff1f00",
      expense: "#2e9e7a",
      shop: "rgb(20, 20, 20)",
    }),
    ["&:hover"]: {
      background: styledByColor("color", {
        default: "rgb(20, 20, 20)",
        blue: "linear-gradient(45deg, rgb(0 137 247) 30%, rgb(10 138 168) 90%)",
        primary: theme.palette.primary.dark,
        secondary: theme.palette.secondary.dark,
        success: theme.palette.success.dark,
        error: theme.palette.error.dark,
        warning: theme.palette.warning.dark,
        tertiary: theme.palette.tertiary.dark,
        text: theme.palette.text.primary,
        vape: "#e01b00",
        expense: "#288b6b",
        shop: "#000",
      }),
    },
  },
  backgroundOutline: {
    border: styledByColor("color", {
      default: borderStart + "#000",
      blue: borderStart + "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      primary: borderStart + theme.palette.primary.main,
      secondary: borderStart + theme.palette.secondary.main,
      success: borderStart + theme.palette.success.main,
      error: borderStart + theme.palette.error.main,
      warning: borderStart + theme.palette.warning.main,
      tertiary: borderStart + theme.palette.tertiary.main,
      text: borderStart + "inherit",
      vape: borderStart + "#ff1f00",
      expense: borderStart + "#2e9e7a",
      shop: borderStart + "rgb(20, 20, 20)",
    }),
    ["&:hover"]: {
      border: styledByColor("color", {
        default: borderStart + "rgb(20, 20, 20)",
        blue: borderStart +
          "linear-gradient(45deg, rgb(0 137 247) 30%, rgb(10 138 168) 90%)",
        primary: borderStart + theme.palette.primary.dark,
        secondary: borderStart + theme.palette.secondary.dark,
        success: borderStart + theme.palette.success.dark,
        error: borderStart + theme.palette.error.dark,
        warning: borderStart + theme.palette.warning.dark,
        tertiary: borderStart + theme.palette.tertiary.dark,
        text: borderStart + theme.palette.text.primary,
        vape: borderStart + "#e01b00",
        expense: borderStart + "#288b6b",
        shop: borderStart + "#000",
      }),
    },
  },
  root: {
    textDecoration: "none",
    borderRadius: theme.shape.borderRadius,
    border: 0,
    alignItems: "center",
    height: styledBySize("size", {
      default: 40,
      large: 48,
      small: 20,
    }),
    padding: styledBySize("size", {
      default: theme.spacing(1.6, 1.4),
      large: theme.spacing(2, 1.5),
      small: theme.spacing(1.1, 0.6),
    }),
    cursor: "pointer",

    boxShadow: styledByColor("color", {
      default: theme.shadows[1],
      blue: "rgba(33, 203, 243, 0.3) 1px 2px 1px 1px",
      primary: theme.shadows[1],
      secondary: theme.shadows[2],
      success: theme.shadows[4],
      error: theme.shadows[2],
      warning: theme.shadows[2],
      tertiary: theme.shadows[2],
      text: theme.shadows[2],
      vape: theme.shadows[1],
    }),
  },
});

export const BrandButton = withStyles(styles)((
  { classes, variant, size, children, color, ref, ...other }: PropsWithChildren<
    ButtonStyles
  >,
) => {
  const isOutlined = variant === "outlined";
  return (
    <Button
      className={clsx([
        { ...classes },
        classes.root,
        { [classes.colorOutline]: isOutlined },
        { [classes.color]: !isOutlined },
        { [classes.backgroundOutline]: isOutlined },
        { [classes.background]: !isOutlined },
      ])}
      variant={variant}
      size={size === "default" ? undefined : size}
      ref={ref}
      {...other}
    >
      {children}
    </Button>
  );
});
BrandButton.displayName = "BrandButton";

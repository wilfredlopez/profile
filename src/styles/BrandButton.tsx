import React, { CSSProperties, PropsWithChildren } from "react";
import {
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import { assertNever } from "@wilfredlopez/react-utils";

export type PaletteColorKeys =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "tertiary"
  | "success";

type RegularButtonColor = "inherit" | "primary" | "secondary";

type CustomColor =
  | "vape"
  | "expense"
  | "shop"
  | "text"
  | "blue"
  | "error"
  | "warning"
  | "tertiary"
  | "success"
  | "default";

type ButtonStylesColor = CustomColor | RegularButtonColor;

interface ButtonStyles {
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  ref?: React.Ref<HTMLButtonElement>;
  color?: ButtonStylesColor;
  className?: string;
  style?: CSSProperties;
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
  href?: string | undefined;
  /**
           * Element placed before the children.
           */
  startIcon?: React.ReactNode;
  /**
           * The variant to use. Defaults to contained
           */
  variant?: "text" | "outlined" | "contained";
}

const color = (theme: Theme) => {
  return {
    default: "#fff",
    blue: "#fff",
    primary: theme.palette.primary.contrastText,
    secondary: theme.palette.secondary.contrastText,
    success: theme.palette.success.contrastText,
    error: theme.palette.error.contrastText,
    warning: "#fff",
    tertiary: theme.palette.tertiary.contrastText,
    text: theme.palette.getContrastText(theme.palette.text.primary),
    vape: "#fff",
    expense: "#fff",
    shop: "#fff",
  };
};

const colorHover = (theme: Theme) => {
  return {
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
  };
};

const bgs = (theme: Theme) => {
  return {
    default: "#000",
    blue: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    primary: theme.palette.primary.main,
    secondary: theme.palette.secondary.main,
    success: theme.palette.success.main,
    error: theme.palette.error.main,
    warning: theme.palette.warning.main,
    tertiary: theme.palette.tertiary.main,
    text: "inherit",
    expense: "#2e9e7a",
    shop: "rgb(20, 20, 20)",
    vape: "#ff1f00",
  };
};

const bgsHover = (theme: Theme) => {
  return {
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
  };
};

function getColorFor(
  matchColor: CustomColor | "primary" | "secondary",
  theme: Theme,
) {
  return {
    color: color(theme)[matchColor],
    background: bgs(theme)[matchColor],
    ["&.MuiButton-outlined"]: {
      color: bgs(theme)[matchColor],
      border: `1px solid ` + bgs(theme)[matchColor],
      background: "transparent",
    },
    ["&.MuiButton-text"]: {
      color: bgs(theme)[matchColor],
      background: "transparent",
    },
    ["&:hover"]: {
      background: bgsHover(theme)[matchColor],
      ["&.MuiButton-outlined"]: {
        border: `1px solid ` + bgsHover(theme)[matchColor],
      },
      ["&.MuiButton-outlined,&.MuiButton-text"]: {
        color: colorHover(theme)[matchColor],
        background: "transparent",
      },
    },
  };
}

const useButtonStyles = makeStyles((theme: Theme) =>
  createStyles({
    vape: getColorFor("vape", theme),
    default: getColorFor("default", theme),
    blue: getColorFor("blue", theme),
    primary: getColorFor("primary", theme),
    secondary: getColorFor("secondary", theme),
    success: getColorFor("success", theme),
    error: getColorFor("error", theme),
    warning: getColorFor("warning", theme),
    tertiary: getColorFor("tertiary", theme),
    text: {
      color: color(theme).text,
      background: bgs(theme).text,
      ["&:hover"]: {
        color: colorHover(theme).text,
        background: bgsHover(theme).text,
      },
    },
    expense: getColorFor("expense", theme),
    shop: getColorFor("shop", theme),
  })
);

function switchColorToRegular(
  color?: ButtonStylesColor,
) {
  switch (color) {
    case "blue":
    case "error":
    case "expense":
    case "shop":
    case "success":
    case "tertiary":
    case "text":
    case "vape":
    case "warning":
    case "default":
      return undefined;
    case "inherit":
    case "primary":
    case "secondary":
    case undefined:
      return color;
    default:
      assertNever(color);
      return undefined;
  }
}
function switchColorToCustom(
  color?: ButtonStylesColor,
) {
  switch (color) {
    case "inherit":
    case "primary":
    case "secondary":
    case undefined:
      return undefined;
    case "blue":
    case "error":
    case "expense":
    case "shop":
    case "success":
    case "tertiary":
    case "text":
    case "vape":
    case "warning":
    case "default":
      return color;

    default:
      assertNever(color);
      return undefined;
  }
}

export const BrandButton = (
  { children, variant = "contained", className, color, size, ...other }:
    PropsWithChildren<
      ButtonStyles
    >,
) => {
  const defaultColor = switchColorToRegular(color);
  const customColor = switchColorToCustom(color);
  const classes = useButtonStyles();

  return <Button
    color={defaultColor}
    variant={variant}
    size={size === "default" ? undefined : size}
    {...other}
    className={clsx(
      [{ [classes[customColor || "default"]]: customColor }],
      className,
    )}
  >
    {children}
  </Button>;
};

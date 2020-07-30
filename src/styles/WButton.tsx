import React from "react";
import {
  withStyles,
  CreateCSSProperties,
} from "@material-ui/styles";
import MuiButton, {
  ButtonProps,
} from "@material-ui/core/Button";
import MuiIconButtom, { IconButtonProps } from "@material-ui/core/IconButton";
import { Theme } from "@material-ui/core/styles";

export type PaletteColorKeys =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "tertiary"
  | "success";

function getOverridesColor(
  colorKey: PaletteColorKeys,
  variant: "text" | "outlined" | "contained",
  theme: Theme,
): CreateCSSProperties {
  return {
    color: theme
      .palette[colorKey][variant === "contained" ? "contrastText" : "main"],
  };
}

function getOverridesBackgroundContained(
  colorKey: PaletteColorKeys,
  theme: Theme,
): CreateCSSProperties {
  return {
    backgroundColor: theme.palette[colorKey].main,
    "&:hover": {
      backgroundColor: theme.palette[colorKey].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme.palette[colorKey].main,
      },
    },
  };
}

const WButton: React.ComponentType<ButtonProps> = withStyles((
  theme: Theme,
) => ({
  root: (props: ButtonProps) =>
    props.variant === "contained" && props.color &&
    props.color !== "inherit" && props.color !== "default"
      ? {
        ...getOverridesColor(props.color, props.variant, theme),
        ...getOverridesBackgroundContained(props.color, theme),
      }
      : (props.variant === "outlined" || props.variant === "text") &&
        props.color &&
        props.color !== "inherit" && props.color !== "default"
      ? { ...getOverridesColor(props.color, props.variant, theme) }
      : {},
}))(MuiButton);

const WIconButton: React.ComponentType<IconButtonProps> = withStyles((
  theme: Theme,
) => ({
  root: (props: IconButtonProps) =>
    props.color &&
    props.color !== "inherit" && props.color !== "default"
      ? {
        color: theme.palette[props.color].main,
        ["&:disabled"]: {
          color: theme.palette.action.disabled,
        },
        ["&:hover"]: {
          color: theme.palette[props.color].dark,
          backgroundColor: "transparent",
          cursor: "pointer",
        },
      }
      : {},
}))(MuiIconButtom);

export { WButton, WIconButton };

import React from "react";
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles";
import ButtonBase, { ButtonBaseProps } from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

const BORDER_RADIOUS = 2;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%",
      borderRadius: BORDER_RADIOUS,
    },
    image: {
      position: "relative",
      height: 200,

      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100,
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.15,
        },
        "& $imageMarked": {
          opacity: 0,
        },
        "& $imageTitle": {
          color: theme.palette.secondary.main,
          background: "rgb(255 255 255 / 93%)",
          border: "3px solid currentColor",
          transition: theme.transitions.create("opacity"),
          // fontWeight: "bold",
          // border: "4px solid rgba(40, 40, 40,84%)",
          // background: "rgba(40, 40, 40,84%)",
          // borderRadius: theme.shape.borderRadius,
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",

      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      borderRadius: BORDER_RADIOUS,
      backgroundSize: "cover",
      //   backgroundPosition: "center 40%",
      backgroundPosition: "center 0",
    },

    imageBackdrop: {
      position: "absolute",
      left: 0,
      borderRadius: theme.shape.borderRadius,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create("opacity"),
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
        6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity"),
    },
  })
);

interface ImageButtonProps {
  title: string;
  width: number;
  url: string;
  minHeight?: number;
  buttomProps?: ButtonBaseProps;
}

export function ImageButton(
  { title, width, url, minHeight = 250, buttomProps = {} }: ImageButtonProps,
) {
  const classes = useStyles();

  return <ButtonBase
    focusRipple
    key={title}
    className={classes.image}
    focusVisibleClassName={classes.focusVisible}
    style={{
      width: width,
      minHeight: minHeight,
    }}
    {...buttomProps}
  >
    <span
      className={classes.imageSrc}
      style={{
        backgroundImage: `url(${url})`,
      }}
    />
    <span className={classes.imageBackdrop} />
    <span className={classes.imageButton}>
      <Typography
        component="span"
        variant="subtitle1"
        color="inherit"
        className={classes.imageTitle}
      >
        {title}
        <span className={classes.imageMarked} />
      </Typography>
    </span>
  </ButtonBase>;
}

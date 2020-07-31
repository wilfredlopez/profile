import { makeStyles, Theme, createStyles } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.black,
    },
    constrainedSection: {
      marginLeft: "auto",
      [theme.breakpoints.only("md")]: {
        // position: "absolute",
        // right: 0,
        minWidth: theme.breakpoints.values.md + 20,
        color: "yellow",
        maxWidth: theme.breakpoints.values.md - 240,
      },
      [theme.breakpoints.up("lg")]: {
        maxWidth: theme.breakpoints.values.lg - 240,
        minWidth: theme.breakpoints.values.lg + 20,
        color: "blue",
      },
    },
  })
);

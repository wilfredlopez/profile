import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import SideDrawer from "./SideDrawer";
import SideItems from "./SideItems";
import styled from "styled-components";
import { usePagesContext } from "@root/context/PagesContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "flex",
  },
  toolbar: {
    transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    // width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "calc(100% - 240px)",
    // },
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
  },
  spacer: {
    flexGrow: 2,
  },
  separator: {
    flex: "1 1 auto",
  },
}));

const StyledAppBar = styled(AppBar)`
    background: ${(props) => props.theme.colors.dark};
`;

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledAppBar position="fixed" className={classes.toolbar}>
        <Toolbar>
          <SideDrawer anchor="left" />
          <div className={classes.separator} />
          {/* <Typography variant="h6" component="h1" className={classes.title}>
            {page}
          </Typography> */}
          <div className={classes.spacer} />
          {/* <Hidden only="xs">
            <Typography variant="caption" className={classes.title}>
              WilfredLopez.Net
            </Typography>
          </Hidden> */}
          <SideItems />
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}

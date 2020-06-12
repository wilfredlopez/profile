import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import SideDrawer from "./SideDrawer";
import SideItems from "./SideItems";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  spacer: {
    flexGrow: 2,
  },
}));

const StyledAppBar = styled(AppBar)`
    background: ${(props) => props.theme.colors.dark};
`;

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledAppBar position="fixed">
        <Toolbar>
          <SideDrawer anchor="left" />
          <Typography variant="h6" className={classes.title}>
            Wilfred Lopez
          </Typography>
          <SideItems />
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}

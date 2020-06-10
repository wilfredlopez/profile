import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { myTheme } from "./styles/theme";
interface Props {
}

const RootProvider = (props: PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={myTheme}>
      {props.children}
    </ThemeProvider>
  );
};

export default RootProvider;

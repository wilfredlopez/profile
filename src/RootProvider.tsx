import React, { PropsWithChildren } from "react";
import { ThemeContainer } from "styles/ThemeContainer";
import { PagesContextProvider } from "context/PagesContext";
interface Props {
}

const RootProvider = (props: PropsWithChildren<{}>) => {
  return (
    <ThemeContainer>
      <PagesContextProvider>
        {props.children}
      </PagesContextProvider>
    </ThemeContainer>
  );
};

export default RootProvider;

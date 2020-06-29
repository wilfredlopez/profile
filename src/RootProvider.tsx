import React, { PropsWithChildren } from "react";
import { ThemeContainer } from "@root/styles/ThemeContainer";
import { PagesContextProvider } from "@root/context/PagesContext";
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

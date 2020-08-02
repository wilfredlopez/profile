import React, { PropsWithChildren } from "react";
import { ThemeContainer } from "@root/theme/ThemeContainer";
import { PagesContextProvider } from "@root/context/PagesContext";
interface Props {
}

const RootProvider = (props: PropsWithChildren<Props>) => {
  return (
    <ThemeContainer>
      <PagesContextProvider>
        {props.children}
      </PagesContextProvider>
    </ThemeContainer>
  );
};

export default RootProvider;

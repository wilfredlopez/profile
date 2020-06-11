import React, { PropsWithChildren } from "react";
import { ThemeContainer } from "styles/ThemeContainer";
interface Props {
}

const RootProvider = (props: PropsWithChildren<{}>) => {
  return (
    <ThemeContainer>
      {props.children}
    </ThemeContainer>
  );
};

export default RootProvider;

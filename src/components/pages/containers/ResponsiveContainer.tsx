import React, { PropsWithChildren } from "react";
import DesktopContainer from "./DesktopContainer";
import MobileContainer from "./MobileContainer";
import Navigation from "components/Layout/Navigation";

interface Props extends PropsWithChildren<{}> {}
const ResponsiveContainer: React.FC<Props> = ({ children }) => (
  <div>
    <Navigation></Navigation>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

export default ResponsiveContainer;

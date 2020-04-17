import React, { PropsWithChildren } from "react"
import DesktopContainer from "./DesktopContainer"
import MobileContainer from "./MobileContainer"

interface Props extends PropsWithChildren<{}> {}
const ResponsiveContainer: React.FC<Props> = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

export default ResponsiveContainer

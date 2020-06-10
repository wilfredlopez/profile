import React, { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.div`
min-height: 100vh;
`;
interface Props {
  onClick: () => void;
}

const SidebarItem = ({ onClick, children }: Props & PropsWithChildren<{}>) => {
  return (
    <Container onClick={onClick}>
      {children}
    </Container>
  );
};

export default SidebarItem;

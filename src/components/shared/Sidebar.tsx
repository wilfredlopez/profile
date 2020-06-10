import React, { PropsWithChildren } from "react";
import styled, { keyframes } from "styled-components";
import { StyledButton } from "./StyledButton";

const fadeIn = keyframes`
  0% {
      transform: translateX(-100%);
      display: none;
    }
    100% {
        transform: translateX(0);
        display: block;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  overflow: hidden;
  height: auto;
`;

const ContentWrapper = styled.div<{ isOpen: boolean }>`
  z-index: 10;
  position: absolute;
  top: 0px;
  bottom: 0px;
  transition: -webkit-transform 0.3s ease-out 0s;
  will-change: transform;
  animation: 0.3s ${fadeIn} ease-out;
  overflow-y: auto;
  background: white;
  width: 80%;
  max-width: 500px;
  left: 0px;
  transform: ${(props) =>
  props.isOpen ? "translateX(0%)" : "translateX(-100%)"};

  box-shadow: ${(props) =>
  props.isOpen ? "rgba(0, 0, 0, 0.15) 2px 2px 4px" : "none"};
`;
const OverLay = styled.div<{ isOpen: boolean }>`
  z-index: 1;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease-out 0s, visibility 0.3s ease-out 0s;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Static = styled.div`
  /* position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  overflow-y: auto; */
  transition: left 0.3s ease-out 0s, right 0.3s ease-out 0s;
`;

interface Props extends PropsWithChildren<{}> {
  isOpen: boolean;
  ContainerClassName?: string;
  ContentWrapperClassName?: string;
  OverLayClassName?: string;
  staticContentWrapperClassName?: string;
  staticContent?: JSX.Element;
  toggleOpen: () => void;
}
const Sidebar = ({
  children,
  toggleOpen,
  staticContent,
  isOpen,
  ContainerClassName,
  ContentWrapperClassName,
  OverLayClassName,
  staticContentWrapperClassName,
}: Props) => {
  return (
    <>
      <Container
        style={{
          display: isOpen ? "block" : "none",
        }}
        role="navigation"
        className={ContainerClassName}
      >
        {isOpen && (
          <ContentWrapper isOpen={isOpen} className={ContentWrapperClassName}>
            {children}
          </ContentWrapper>
        )}
        <OverLay
          isOpen={isOpen}
          onClick={toggleOpen}
          className={OverLayClassName}
        />
      </Container>
      <Static className={staticContentWrapperClassName}>
        {staticContent ? staticContent : <StyledButton>Open</StyledButton>}
      </Static>
    </>
  );
};

export default Sidebar;

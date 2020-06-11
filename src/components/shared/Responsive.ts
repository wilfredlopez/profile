import styled from "styled-components";

export interface ResponsiveProps {
  readonly maxWidth?: string;
}

const Responsive = styled.div<ResponsiveProps>`
  max-width: ${(props) => props.maxWidth ? props.maxWidth : "950px"};
  display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

export default Responsive;

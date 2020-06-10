import styled from "styled-components";

export interface ResponsiveProps {
  readonly maxWidth?: string;
}

const Responsive = styled.div<ResponsiveProps>`
  width: ${(props) => props.maxWidth ? props.maxWidth : "950px"};
`;

export default Responsive;

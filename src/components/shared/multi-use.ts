import styled from "styled-components";

export const PrimaryBackgroundSection = styled.section`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryContrast};
  margin: auto;
  display: flex;
  flex-direction: column;
`;

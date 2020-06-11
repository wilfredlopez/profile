import styled from "styled-components";

export const PrimaryBackgroundSection = styled.section`
  background: ${(props) => props.theme.colors.dark};
  /* background:#040c14; */
  /* color: ${(props) => props.theme.colors.primaryContrast}; */
  color: ${(props) => props.theme.colors.light};
  margin: auto;
  display: flex;
  flex-direction: column;
`;

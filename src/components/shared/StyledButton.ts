import styled, { css } from "styled-components";

export const StyledButton = styled.button<{ fullWidth?: boolean }>`
${(props) =>
  props.fullWidth && css`
width:100%;
`}
  box-shadow: 0 18px 30px rgba(50, 50, 93, 0.1),
    0 8px 15px rgba(50, 50, 93, 0.1);
  background: ${(props) => props.theme.colors.dark};
  color: white;
  border: none;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background: #3b3b3b;
  }
`;

export const CircleButton = styled(StyledButton)`
  border-radius: 50%;
  position: absolute;
  bottom: 50px;
  right: 50px;
`;

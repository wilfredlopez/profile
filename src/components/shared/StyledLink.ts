import { SECONDARY_COLOR } from "@root/styles/getTheme";
import styled from "styled-components";

export const NonStyledAnchor = styled.a`
    color: inherit;
    text-decoration: none;
    &:hover{
       color: 'inherit'
    }
`;

export const StyledLink = styled.a<{ color?: string }>`
    color:  ${(props) => props.color ? props.color : "inherit"};
    text-decoration: none;
    &:hover{
       color: ${SECONDARY_COLOR}
    }
`;

export const StyledHtmlLink = styled.a<{ color?: string }>`
    color: ${(props) => props.color ? props.color : "inherit"};
    text-decoration: none;
`;

export default StyledLink;

import { SECONDARY_COLOR } from "@root/styles/getTheme";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const StyledLink = styled.a`
    color: inherit;
    text-decoration: none;
    &:hover{
       color: ${SECONDARY_COLOR}
    }
`;

export const StyledHtmlLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

export default StyledLink;

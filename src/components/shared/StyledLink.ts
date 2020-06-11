import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    &:hover{
       color: #c5c5c5;
    }
`;

export const StyledHtmlLink = styled.a`
    color: inherit;
    text-decoration: none;
`;

export default StyledLink;

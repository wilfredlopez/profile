// import { SECONDARY_COLOR } from '@root/theme/getTheme'
import styled from 'styled-components'
import { LINK_COLOR } from '../../theme/getTheme'

export const NonStyledAnchor = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: 'inherit';
    text-decoration: none;
  }
`

export const StyledLink = styled.a<{ color?: string }>`
  color: ${props => (props.color ? props.color : 'inherit')};
  text-decoration: none;
  &:hover {
    color: ${LINK_COLOR};
  }
`

export const StyledHtmlLink = styled.a<{ color?: string; noHover?: boolean }>`
  color: ${props => (props.color ? props.color : 'inherit')};
  text-decoration: none;
  &:hover {
    color: ${props =>
    props.noHover ? 'inherit' : props.theme.colors.tertiary};
  }

  @media (prefers-color-scheme: dark) {
  color: white;
  &:hover{
    color: #fcfcfc;
  }
}
`

export const NonActiveLink = styled(StyledHtmlLink)`
  color: 'inherit';
  &:hover {
    /* color: ${props => props.theme.colors.tertiary}; */
    color: ${LINK_COLOR};
    font-weight: 500;
  }
`

export default StyledLink

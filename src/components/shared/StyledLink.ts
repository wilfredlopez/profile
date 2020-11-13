import { SECONDARY_COLOR } from '@root/theme/getTheme'
import styled from 'styled-components'

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
    color: ${props => props.theme.colors.tertiary};
  }
`

export const StyledHtmlLink = styled.a<{ color?: string; noHover?: boolean }>`
  color: ${props => (props.color ? props.color : 'inherit')};
  text-decoration: none;
  &:hover {
    color: ${props =>
      props.noHover ? 'inherit' : props.theme.colors.tertiary};
  }
`

export const NonActiveLink = styled(StyledHtmlLink)`
  color: 'inherit';
  &:hover {
    color: ${props => props.theme.colors.tertiary};
    font-weight: 500;
  }
`

export default StyledLink

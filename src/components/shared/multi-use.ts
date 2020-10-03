import styled from 'styled-components'
import { StyledComponentColorKey } from '../../theme/getTheme'

export const PrimaryBackgroundSection = styled.section<{
  bgColor?: StyledComponentColorKey
  textColor?: StyledComponentColorKey
}>`
  background: ${props => props.theme.colors[props.bgColor || 'dark']};
  color: ${props => props.theme.colors[props.textColor || 'light']};
  margin: auto;
  display: flex;
  flex-direction: column;
`

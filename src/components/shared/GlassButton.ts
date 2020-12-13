import { Button, Fab } from '@material-ui/core'
import styled from 'styled-components'


//Styled components adds prefixes by default so no need to:  -webkit-backdrop-filter: blur(40px);
export const GlassButton = styled(Button)`
color: #fff;
background: linear-gradient(45deg, rgb(255 255 255 / 30%), rgb(202 202 202 / 30%), rgb(255 255 255 / 30%));
backdrop-filter: blur(40px);
background-clip: padding-box;
`

export const GlassFab = styled(Fab)`
color: #fff;
background: linear-gradient(45deg, rgb(255 255 255 / 30%), rgb(202 202 202 / 30%), rgb(255 255 255 / 30%));
backdrop-filter: blur(40px);
background-clip: padding-box;
`
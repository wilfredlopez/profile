import { Container, Typography } from '@material-ui/core'

import styled from 'styled-components'
// import BounceComponent from '../shared/BounceComponent'
import { NonStyledAnchor } from '../shared/StyledLink'
import { INSTAGRAM_COLOR } from '@components/Layout/SideItems'


const InstagramText = styled(Typography)`
      background: #f3f3f3;
      color: ${INSTAGRAM_COLOR};
      :hover{
        background: #ebeaea;
      }
    border-radius: 4px;
    width: fit-content;
    margin-left: auto !important;
    margin-right: auto !important;
    padding: 10px 20px;
    box-shadow: 0px 2px 1px 1px rgb(0 0 0 / 10%), 1px 1px 3px 2px rgb(0 0 0 / 5%);
`
const InstagramImage = styled.img`
  width: 100%;
  max-height: 200px;
  max-width: 237px;
  height: 100%;
  border-radius: 12px;
  display: flex;
  margin: auto;
`



interface Props {
  /**
   * @default 10
   */
  percentBounce?: number
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Instagram = (_: Props) => {
  return (
    <Container maxWidth='md'>
      <NonStyledAnchor
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.instagram.com/wilfredlopez/'
      >
        <div className="bounce">


          <InstagramImage src='/INSTAGRAM_WILFRED_LOPEZ.jpg' />

          <div className="mt-1" />

        </div>
        <InstagramText
          align='center'
          variant='subtitle1'
          //@ts-ignore
          component='h6'
        >
          Follow me on Instagram
        </InstagramText>
      </NonStyledAnchor>
    </Container>
  )
}

export default Instagram

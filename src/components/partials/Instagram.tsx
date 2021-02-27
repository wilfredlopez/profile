import { Container, Typography } from '@material-ui/core'

import React from 'react'
import styled from 'styled-components'
import BounceComponent from '../shared/BounceComponent'
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
    padding: 20px;
    box-shadow: 0px 2px 1px 1px rgb(0 0 0 / 10%), 1px 1px 3px 2px rgb(0 0 0 / 5%);
`
const InstagramImage = styled.img`
  width: 100%;
  max-height: 200px;
  max-width: 225px;
  height: 100%;
  border-radius: 12px;
  display: flex;
  margin: auto;
`



interface Props {
  percentBounce?: number
}

const Instagram = ({ percentBounce = 10 }: Props) => {
  return (
    <Container maxWidth='md'>
      <NonStyledAnchor
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.instagram.com/wilfredlopez/'
      >
        <BounceComponent percentBounce={percentBounce}>
          <InstagramImage src='/INSTAGRAM_WILFRED_LOPEZ.jpg' />
        </BounceComponent>

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

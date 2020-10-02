import { Container, Typography } from '@material-ui/core'

import React from 'react'
import styled from 'styled-components'
import BounceComponent from '../shared/BounceComponent'
import { NonStyledAnchor } from '../shared/StyledLink'

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

const Instagram = ({ percentBounce = 12 }: Props) => {
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

        <Typography align='center' variant='h6'>
          Follow me on Instagram
        </Typography>
      </NonStyledAnchor>
    </Container>
  )
}

export default Instagram

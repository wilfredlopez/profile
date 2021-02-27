import React from 'react'
import { Container, Avatar, Typography, Button } from '@material-ui/core'
import wilfredImg from '@root/img/wilfred-profile.png'
import { Responsive, GlassButton } from '../shared'
import Segment from '../shared/Segment'
import WorkIcon from '@material-ui/icons/Work'
import RoomIcon from '@material-ui/icons/Room'
// import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import styled from 'styled-components'
// import { BrandButton } from "@root/theme/Custom";
import ScaleUpDownComponent from '@components/shared/ScaleUpDownComponent'
import { motion } from 'framer-motion'
import { CONTACT_EMAIL } from '@root/constants'
import useSharedStyles from '@root/theme/useSharedStyles'
interface Props {
  height?: string
}

const StyledAnker = styled.a`
  color: inherit;
  text-decoration: none;
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`

// const PlacesGrid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     grid-gap: 1rem;
//     margin-bottom: 1rem;
//     & div{
//       display: flex;
//     }
// `;
const HomepageHeading: React.FC<Props> = ({ height = '81vh' }) => {
  const classes =
    useSharedStyles()
  return (

    <Responsive>
      <Segment>
        <Container className={classes.welcomeSection} id='welcome-section'>
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1.3, 1] }}
            transition={{
              type: 'spring',
            }}
          >
            <Avatar
              src={wilfredImg}
              // src="https://res.cloudinary.com/wlopez/image/upload/v1561207949/wilfredZoomed.png"
              // size="medium"
              style={{
                width: '100%',
                height: '100%',
                maxWidth: 400,
                maxHeight: 400,
                borderRadius: '2rem',
                margin: 'auto',
              }}
              // circular
              alt='wilfred'
              className='m-auto border-full with-shadow'
            />
          </motion.div>

          <Typography
            component='h1'
            variant='h4'
            style={{
              // fontSize: "2em",
              fontWeight: 'normal',
              marginBottom: 5,
              marginTop: '0.5em',
            }}
          >
            <ScaleUpDownComponent backgrounds={[] as any}>
              WILFRED LOPEZ
          </ScaleUpDownComponent>
          </Typography>
          <Item>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0,
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.4,
                  },
                },
              }}
            >
              <WorkIcon />

              <Typography component="h2" variant="h6">Quality Assurance/Web Development</Typography>
              <Typography component="h3" variant="body2">React, Nodejs, Express, MongoDB, Web Accessibility</Typography>
              <small></small>
            </motion.div>
          </Item>
          <Item>
            <RoomIcon />
            <div>
              <Typography variant="caption">Garfield, NJ, USA.</Typography>
            </div>
            <motion.div style={{ margin: '1rem 0' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.3 }}>
              <GlassButton
                endIcon={<MailOutlineIcon />}
                color="primary"
                variant='contained'
                size="large"
              >
                <StyledAnker href={`mailto:${CONTACT_EMAIL}`} title='contact me'>
                  CONTACT ME
                </StyledAnker>
              </GlassButton>
            </motion.div>
          </Item>


        </Container>
      </Segment>
    </Responsive>
  )
}
export default HomepageHeading

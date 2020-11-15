import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  makeStyles,
  Paper,
  Snackbar,
  Typography,
  useTheme,
} from '@material-ui/core'
import { NnmPackage, NPM_PACKAGES } from './NPM_PACKAGES'
import { BrandButton } from '@root/theme/Custom'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { DividerElement, StyledHtmlLink } from '../shared'
import { findIndex, Position, move } from '../shared/find-index'
import { DARK_BACKGROUND_COLOR } from '@root/theme/getTheme'
import { throttle } from '@wilfredlopez/react-utils'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { PRIMARY_COLOR, TERTIARY_COLOR, SECONDARY_COLOR } from '../../theme/getTheme'

interface Props {
  dark?: boolean
  limit?: number
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

const useNpmStyles = makeStyles(theme => {
  return {
    wrapper: {
      color: theme.palette.text.primary,
      background: theme.palette.background.paper
    },
    cardRoot: {
      color: '#000',
      background: '#fff',
      justifyContent: 'center',
      height: 200,
      alignItems: 'flex-start',
      display: 'flex',
      flexDirection: 'column',
    },
  }
})

const NpmPackages = (props: Props) => {
  const classes = useNpmStyles()

  const theme = useTheme()

  const positions = useRef<Position[]>([]).current
  const [items, setItems] = React.useState(
    props.limit ? NPM_PACKAGES.slice(0, props.limit) : NPM_PACKAGES
  )
  function setPosition(i: number, offset: Position) {
    positions[i] = offset
  }
  const moveItem = (i: number, dragOffset: number) => {
    const targetIndex = findIndex(i, dragOffset, positions)
    if (targetIndex !== i) {
      setItems(move(items, i, targetIndex))
    }
  }
  return (
    <Box>
      <Paper
        style={
          props.dark
            ? {
              background: theme.palette.background.paper,
              color: 'inherit',
            }
            : {}
        }
        className={classes.wrapper}
        elevation={0}
      >
        <Container>
          <Box mb={2} pt={2}>
            <DividerElement>
              <Typography align='center'>NPM Packages</Typography>
            </DividerElement>
          </Box>
          <Grid
            container
            spacing={2}
            justify='center'
            alignContent='center'
            alignItems='center'
          >
            {items.map((pa, index) => {
              return (
                <Grid key={pa.name} item xs={12} md={6}>
                  <NpmPackage
                    data={pa}
                    totalItems={items.length}
                    i={index}
                    moveItem={moveItem}
                    setPosition={setPosition}
                  />
                </Grid>
              )
            })}
          </Grid>
        </Container>
        <Box pb={2} />
      </Paper>
    </Box>
  )
}

interface PackProps {
  data: NnmPackage
  i: number
  totalItems: number
  setPosition: (i: number, pos: Position) => void
  moveItem: (i: number, dragOffset: number) => void
}

const onTop = { zIndex: 1 }
const flat = {
  zIndex: 0,
  transition: { delay: 0.3 },
}

function NpmPackage({ data, i, moveItem, setPosition, totalItems }: PackProps) {
  const classes = useNpmStyles()
  const [isDragging, setDragging] = React.useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const ref = useRef<HTMLDivElement>(null)
  const [copyMessageOpen, setCopyMessageOpenTo] = React.useState(false)
  const _setPosition = throttle(function () {
    setPosition(i, {
      height: ref.current!.offsetHeight,
      top: ref.current!.offsetTop,
    })
  }, 100)

  // Update the measured position of the item so we can calculate when we should rearrange.
  React.useEffect(() => {
    _setPosition()
  })

  return (
    <>
      <Snackbar
        open={copyMessageOpen}
        autoHideDuration={1000}
        style={{
          position: 'relative',
        }}
        onClose={() => {
          setCopyMessageOpenTo(false)
        }}
      >
        <Box position='absolute' bottom='0' left='25%' width={400}>
          <BrandButton color='success'>
            {/* <Alert onClose={ setCopyMessageOpenTo(false)} severity="success"> */}
            <Box display='block' width='100%'>
              <span>Copied to clipboard</span>
            </Box>
            {/* </Alert> */}
          </BrandButton>
        </Box>
      </Snackbar>
      <motion.div
        drag={matches}
        ref={ref}
        layout
        animate={isDragging ? onTop : flat}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.12 }}
        transition={spring}
        dragConstraints={{ top: 10, bottom: 10, left: 10, right: 10 }}
        dragElastic={1}
        onDragStart={() => setDragging(true)}
        onDragEnd={() => setDragging(false)}
        onDrag={(e, { point }) => moveItem(i, point.y)}
      >
        <Card
          className={classes.cardRoot}
          style={{
            position: 'relative',
            background: 'white',
            // background:
            //   i === totalItems - 1 ? 'rgb(255 255 255 / 90%)' : 'white',
          }}
        >
          <CardHeader
            title={data.name}
            titleTypographyProps={{
              component: "h1",
              style: {
                fontSize: '1.3rem',
              },
            }}
            subheaderTypographyProps={{
              color: 'inherit',
              style: {
                color: 'gray'
              },
              variant: 'caption'
            }}
            subheader={data.command}
            action={
              <Box width='100%' justifyContent='flex-end'>
                <BrandButton
                  size='small'
                  onClick={() => {
                    navigator.clipboard.writeText(data.command || '')
                    setCopyMessageOpenTo(true)
                  }}
                  style={{
                    position: 'absolute',
                    right: 12,
                  }}
                  variant='outlined'
                  color='success'
                >
                  Copy
                </BrandButton>
              </Box>
            }
          ></CardHeader>
          <CardContent>
            <Typography variant='body2'>
              {data.description}

              <StyledHtmlLink
                href={data.url}
                title={data.name + ' npm home'}
                color={SECONDARY_COLOR}
                style={{
                  display: 'block',
                }}
                target='_blank'
                rel='noopener noreferrer'
                role='link'
              >
                {data.name}
              </StyledHtmlLink>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </>
  )
}

export default NpmPackages

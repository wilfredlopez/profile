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
import { NnmPackage, NPM_PACKAGES, } from './NPM_PACKAGES'
import { BrandButton } from '@root/theme/Custom'
import { motion } from 'framer-motion'
import { useRef, useState, useEffect, useCallback, useMemo } from 'react'
import { DividerElement, StyledHtmlLink } from '../shared'
import { findIndex, Position, move } from '../shared/find-index'
// import { DARK_BACKGROUND_COLOR } from '@root/theme/getTheme'
import { throttle } from '@wilfredlopez/react-utils'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { TitleLink } from '../projects/Project'
import {
  // PRIMARY_COLOR, TERTIARY_COLOR, 
  SECONDARY_COLOR
} from '../../theme/getTheme'

interface Props {
  dark?: boolean
  limit?: number
  omitDivider?: boolean
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
      borderRadius: '1rem'
    },
  }
})



const NpmPackages = ({ limit, dark, omitDivider }: Props) => {
  const classes = useNpmStyles()

  const theme = useTheme()

  const positions = useRef<Position[]>([]).current
  const [items, setItems] = useState(
    () => limit ? NPM_PACKAGES.slice(0, limit) : NPM_PACKAGES
  )
  const setPosition = useCallback(function setPosition(i: number, offset: Position) {
    positions[i] = offset
  }, [positions])
  const moveItem = useCallback((i: number, dragOffset: number) => {
    const targetIndex = findIndex(i, dragOffset, positions)
    if (targetIndex !== i) {
      setItems(move(items, i, targetIndex))
    }
  }, [items, positions])


  const ComponentItems = useMemo(() => items.map((pa, index) => {
    return (
      <Grid key={pa.name} item xs={12} md={6}>
        <NpmPackage
          data={pa}
          // totalItems={items.length}
          i={index}
          moveItem={moveItem}
          setPosition={setPosition}
        />
      </Grid>
    )
  }), [items, moveItem, setPosition])


  return (
    <Box>
      <Paper
        style={
          dark
            ? {
              background: theme.palette.background.paper,
              color: 'inherit',
            }
            : {}
        }
        className={classes.wrapper}
        elevation={0}
      >
        <Box mb={3} pt={2}>

          {omitDivider ?

            <Typography align='center' variant="h4">NPM Packages</Typography>
            :
            <DividerElement>
              <TitleLink
                target="_blank"
                rel="noopener noreferrer"
                noHover href="https://www.npmjs.com/~wilfredlopez">
                NPM Packages
</TitleLink>
            </DividerElement>
          }

        </Box>
        <Container>
          <Grid
            container
            spacing={2}
            justify='center'
            alignContent='center'
            alignItems='center'
          >
            {ComponentItems}
            {/* {items.map((pa, index) => {
              return (
                <Grid key={pa.name} item xs={12} md={6}>
                  <NpmPackage
                    data={pa}
                    // totalItems={items.length}
                    i={index}
                    moveItem={moveItem}
                    setPosition={setPosition}
                  />
                </Grid>
              )
            })} */}
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
  // totalItems: number
  setPosition: (i: number, pos: Position) => void
  moveItem: (i: number, dragOffset: number) => void
}

const onTop = { zIndex: 1 }
const flat = {
  zIndex: 0,
  transition: { delay: 0.3 },
}



function NpmPackage({ data, i, moveItem, setPosition }: PackProps) {
  const classes = useNpmStyles()
  const [isDragging, setDragging] = useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const ref = useRef<HTMLDivElement>(null)
  const [copyMessageOpen, setCopyMessageOpenTo] = useState(false)

  const _setPosition = throttle(function () {
    setPosition(i, {
      height: ref.current!.offsetHeight,
      top: ref.current!.offsetTop,
    })
  }, 100)

  // Update the measured position of the item so we can calculate when we should rearrange.
  useEffect(() => {
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
          elevation={2}
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
                maxWidth: data.name.length > 20 ? 'fit-content' : 'unset'
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
                    padding: "3px 5px",
                    fontSize: "0.7125rem"
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
                {data.fullName || data.name}
              </StyledHtmlLink>
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </>
  )
}

export default NpmPackages

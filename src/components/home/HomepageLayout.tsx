// import SocialMediaEmbeds from "./partials/SocialMediaEmbeds";
import { PrimaryBackgroundSection } from '@components/shared'
import {
  Box,
  Container,
  Grid,
  Hidden,
  List,
  Paper,
  Typography,
} from '@material-ui/core'
import { usePagesContext } from '@root/context/PagesContext'
import useSharedStyles from '@root/theme/useSharedStyles'
import { useEffect, useMemo, memo } from 'react'
import styled from 'styled-components'
import { ExperienceList } from './ExperienceList'
import { EducationList } from './EducationList'
import HomepageHeading from '../partials/HomepageHeading'
import HomeProjectGrid from './HomeProjectGrid'
import ShowCaseProjectButton from './ShowCaseProjectButton'

const SummaryLi = styled.li`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  text-align: start;
  font-size: 1.16rem;
  &::before {
    content: '• ';
  }
`

const Title = styled(Typography) <{ component: string }>`
  text-decoration: underline;
  margin-bottom: 30px !important;
`

const SectionGridStyled = styled(Grid)`
  margin-top: 50px !important;
  margin-bottom: 50px !important;
`

const SUMMARY_TEXTS = [
  'Proficient knowledge of HTML 5, CSS 3, JavaScript.',
  'Experieced with MS Excel.',
  'Excellent communication skills, organization skills, and excellent attention to detail.',
  'Proficient knowledge of accessibility standards (Section 508/WCAG 2.0 Level A and AA).',
  'Good understanding of assistive technologies (JAWS, NVDA, VoiceOver).',
  '6 years of call center and Workforce Management experience.',
  'Proficient experience in QA testing methodology.',
  'Proven ability to document issues and bugs.',
]
const _summary = (
  <Grid item>
    <Container maxWidth='md' style={{ margin: 0, padding: 0 }}>
      <List style={{ fontSize: '1.1em' }}>
        {SUMMARY_TEXTS.map(text => {
          return <SummaryLi key={text}>{text}</SummaryLi>
        })}
      </List>
    </Container>
  </Grid>
)


const HomepageLayout: React.FC<{}> = () => {
  const { changePage } = usePagesContext()
  const classes = useSharedStyles()
  const Summary = useMemo(() => _summary, [])

  useEffect(() => {
    changePage('Home')
  }, [changePage])
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])




  return (
    <>
      <PrimaryBackgroundSection>
        <Paper elevation={1} className={classes.homepageHeadingPaper}>

          <HomepageHeading />
        </Paper>
      </PrimaryBackgroundSection>
      <Box pb={2} />
      <Paper square elevation={0}>
        <Grid
          container
          spacing={0}
          direction='row'
          justify='flex-start'
          alignItems='flex-start'
        >
          <Grid
            container
            item
            direction='row'
            justify='space-around'
            alignItems='flex-start'
          >
            <SectionGridStyled item xs={12} md={4}>
              <Title variant='h4' component='h2' align='center' className="caption-text">
                Experiences
              </Title>
              <ExperienceList />{' '}
            </SectionGridStyled>

            <Grid item xs={10} sm={6} md={4}>
              <Hidden smDown>
                <Box
                  css={{
                    marginTop: 50,
                  }}
                />
              </Hidden>
              <Title variant='h4' component='h2' align='center' className="caption-text">
                Skills
              </Title>
              <EducationList />
            </Grid>
          </Grid>

          <Grid container justify='flex-start'>
            <Container
              classes={{
                root: classes.minPaddingX,
              }}
            >
              <Box
                css={{
                  marginTop: 50,
                }}
              />
              {Summary}
            </Container>
          </Grid>
        </Grid>
        <Box pb={2} />
      </Paper>
      <Box pb={2} />
      <Paper square elevation={1}>
        <Box pt={3} />

        <Typography align='center' variant='h4' component='h2' className="caption-text">
          Featured Projects
        </Typography>

        <Container
          id='projects'
          classes={{
            root: classes.minPaddingX,
          }}
        >
          <Box pb={2} />
          <HomeProjectGrid limit={4} />
        </Container>
        <ShowCaseProjectButton color='primary' variant='contained' />
        <Box pb={2} />

      </Paper>
      {/* <SocialMediaEmbeds /> */}
    </>
  )
}
export default memo(HomepageLayout, () => false)

import { StyledHtmlLink } from "@components/shared"
import SliderCard, { ImageToSlider } from "@components/shared/SliderCard"
import {
  Container,
  Grid,
  Typography,
} from "@material-ui/core"
import { BrandButton, ImageButton } from "@root/theme/Custom"
import useSharedStyles from "@root/theme/useSharedStyles"
import styled from "styled-components"
import { DividerElement } from "@components/shared"

interface Props {
  url: string
  images: ImageToSlider[]
  name: string
  classKey: "vape" | "expense" | "shop"
  title: string
  showSliderControls?: boolean
  loop?: boolean
  description: JSX.Element
}


export const TitleLink = styled(StyledHtmlLink)`
  font-size: 1.2rem;
  color: inherit;
  font-weight: 500;
  cursor: pointer;
`

const Project: React.FC<Props> = (
  { showSliderControls = true, url, name, title, loop, ...props },
) => {
  const classes = useSharedStyles()
  return (
    <>

      <DividerElement
        className="header project-tile"
        style={{ textTransform: "uppercase", paddingTop: '2rem' }}
      >
        <TitleLink
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={name}
          noHover
        >
          {name}
        </TitleLink>
      </DividerElement>

      <Container
        maxWidth="sm"
        style={{
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
        classes={{
          root: classes.minPaddingX,
        }}
      >
        <Typography variant="body1" component="div">
          {props.description}
          {props.images.length > 1 &&
            <SliderCard
              showControls={showSliderControls}
              imageData={props.images}
              height={750}
              loop={loop}
              showTitle
            />}
        </Typography>
      </Container>
      {props.images.length === 1 &&
        <div style={{
          marginBottom: "1rem",
          textAlign: 'center'
        }} className={classes.minPaddingX.concat(" " + classes.flexCenter)}>
          <ImageButton
            linkUrl={url}

            title={title}
            backgroundUrl={props.images[0].imgPath}
            width={520}
            minHeight={500}
            buttomProps={{}}
          />

        </div>}

      <div style={{ marginBottom: "1rem" }} />
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ paddingBottom: "1rem" }}
      >
        <Grid item>
          <BrandButton color={props.classKey} size='large' variant="contained">
            <StyledHtmlLink href={url} className="text-white" title={name} noHover>
              {name.toUpperCase()}
            </StyledHtmlLink>
          </BrandButton>
        </Grid>
      </Grid>
    </>
  )
}

export default Project

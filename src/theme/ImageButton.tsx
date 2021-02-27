import { PropsWithChildren } from "react"
import { Theme, makeStyles, createStyles } from "@material-ui/core/styles"
import ButtonBase, { ButtonBaseProps } from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import { NonStyledAnchor } from "@components/shared"
const BORDER_RADIOUS = 2


const OVERRIDES = {
  imageTitle_HOVER: {
    opacity: 0,
  },
  imageTitle: {
    background: 'rgba(255,255,255,0.4)',
    backgroundClip: 'padding-box',
    // backdropFilter: 'blur(40px)',
    backdropFilter: 'blur(40px) contrast(1.5)',
    // WebkitBackdropFilter: 'blur(40px)',
    WebkitBackdropFilter: 'blur(40px) contrast(1.5)',
    borderBottom: '2px solid transparent',
    color: 'black'
  },
  imageBackdrop: {
    opacity: 0,
  }
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      minWidth: 300,
      width: "100%",
      borderRadius: BORDER_RADIOUS,
    },
    image: {
      position: "relative",
      height: 200,

      [theme.breakpoints.down("xs")]: {
        width: "100% !important", // Overrides inline-style
        height: 100,
      },
      "&:hover, &$focusVisible": {
        zIndex: 1,
        "& $imageBackdrop": {
          opacity: 0.01,
        },
        "& $imageMarked": {
          opacity: 0,
        },
        "& $imageTitle": {
          // color: theme.palette.primary.main,
          // background: "rgb(255 255 255 / 93%)",
          // border: "3px solid currentColor",
          transition: theme.transitions.create("opacity"),
          background: 'rgba(255,255,255,0.4)',
          backgroundClip: 'padding-box',
          // backdropFilter: 'blur(40px)',
          backdropFilter: 'blur(40px) contrast(1.5)',
          // WebkitBackdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px) contrast(1.5)',
          borderBottom: '2px solid transparent',
          borderLeft: '2px solid transparent',
          color: 'black',
          ...OVERRIDES.imageTitle_HOVER
          // fontWeight: "bold",
          // border: "4px solid rgba(40, 40, 40,84%)",
          // background: "rgba(40, 40, 40,84%)",
          // borderRadius: theme.shape.borderRadius,
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: "absolute",

      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      borderRadius: BORDER_RADIOUS,
      backgroundSize: "cover",
      //   backgroundPosition: "center 40%",
      backgroundPosition: "center 0",
    },

    imageBackdrop: {
      position: "absolute",
      left: 0,
      borderRadius: theme.shape.borderRadius,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      // opacity: 0.4,
      transition: theme.transitions.create("opacity"),
      ...OVERRIDES.imageBackdrop
    },
    imageTitle: {
      position: "relative",
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
        6}px`,
      ...OVERRIDES.imageTitle
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: "absolute",
      bottom: -2,
      left: "calc(50% - 9px)",
      transition: theme.transitions.create("opacity"),
    },
  })
)

interface ImageButtonProps {
  title: string
  width: number
  backgroundUrl: string
  minHeight?: number
  buttomProps?: ButtonBaseProps
  linkUrl?: string
  linkTarget?: string
}

export function ImageButton(
  {
    title,
    width,
    backgroundUrl,
    minHeight = 250,
    buttomProps = {},
    linkUrl,
    linkTarget = "_blank",
  }: ImageButtonProps,
) {
  const classes = useStyles()
  const Wrapper = linkUrl ? WithLink : WithSpan

  return <Wrapper linkTarget={linkTarget} linkUrl={linkUrl || ""}>
    <ButtonBase
      focusRipple
      key={title}
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}
      style={{
        width: width,
        minHeight: minHeight,
      }}
      {...buttomProps}
    >
      <span
        className={classes.imageSrc}
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      />
      <span className={classes.imageBackdrop} />
      <span className={classes.imageButton}>
        <Typography
          component="span"
          variant="subtitle1"
          color="inherit"
          className={classes.imageTitle}
        >
          {title}

          <span className={classes.imageMarked} />
        </Typography>
      </span>
    </ButtonBase>
  </Wrapper>
}

const WithLink = (
  { linkTarget, linkUrl, children }: PropsWithChildren<
    { linkUrl: string; linkTarget: string }
  >,
) => {
  return <NonStyledAnchor
    href={linkUrl}
    target={linkTarget}
    style={{
      width: '100%'
    }}
    rel={linkTarget === "_blank" ? "noopener noreferrer" : undefined}
  >
    {children}
  </NonStyledAnchor>
}

const WithSpan = ({ children }: PropsWithChildren<{}>) => (<span>
  {children}
</span>)

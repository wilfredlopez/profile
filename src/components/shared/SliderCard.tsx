import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { AnimateSharedLayout } from "framer-motion";
// import styled, {
//    keyframes
//   } from "styled-components";
import { IconButton } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";

// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;

// const ShowHideImage = styled.div<{ show: boolean }>`
//     /* display: ${(props) => props.show ? "block" : "none"}; */
//     /* transform: ${(props) =>
//   props.show ? "translate(0)" : "translate(-10000%)"}; */
//     transition: all 200ms ease-in-out;
//     /* animation: ${rotate} 2s linear; */
//     will-change: transform;
// `;

export interface ImageToSlider {
  label?: string;
  imgPath: string;
}

interface Props {
  imageData: ImageToSlider[];
  height?: number;
  width?: number;
  loop?: boolean;
  showControls?: boolean;
  showBackdrop?: boolean;
  showControlsInTitle?: boolean;
  showTitle?: boolean;
  imageContainerClass?: string;
}

// const MAX_HEIGHT = 600;
const MIN_WIDTH = 500;
const BORDER_RADIUS = 6;

// const Img = styled.div<{ url: string }>`
//         height:100%;
//     display: block;
//     max-width: 100%;
//     min-width: ${MIN_WIDTH}px;
//     min-height: 600px;
//     overflow: hidden;
//     width: 100%;
//     background: url(${(props) => props.url});
//     position: relative;
//     transition: background 1s ease-in;
//     background-size:cover;
//     background-repeat: no-repeat;
//     object-fit: cover;
// `;

const useStyles = makeStyles((theme) => ({
  sliderCardRoot: {
    minWidth: MIN_WIDTH,
    maxWidth: "100%",
    flexGrow: 1,
    margin: "auto",
    // marginBottom: "1rem",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      minWidth: "auto",
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    // paddingLeft: theme.spacing(4),
    color: theme.palette.background.default,
    background: theme.palette.getContrastText(theme.palette.background.default),
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    // border: `1px outset ${theme.palette.background.paper}`,

    borderBottom: 0,
    borderRight: 0,
    borderLeft: 0,
    position: "relative",
  },
  stepper: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
    opacity: 0.9,
    color: theme.palette.background.default,
    background: theme.palette.getContrastText(theme.palette.background.default),
  },
  focusVisible: {},
  img: {
    height: "100%",
    display: "block",
    maxWidth: "100%",
    minWidth: MIN_WIDTH,
    overflow: "hidden",
    width: "100%",
    position: "relative",
    transition: "all 200ms ease-in-out",

    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
      minWidth: "auto",
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0,
      },
    },
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    borderRadius: theme.shape.borderRadius,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.15,
    transition: theme.transitions.create("opacity"),
  },
}));

function SliderCard(
  {
    imageData,
    imageContainerClass,
    height = 500,
    showControlsInTitle = true,
    loop = false,
    showControls = true,
    showTitle = false,
    showBackdrop = false,
  }: Props,
) {
  const classes = useStyles();
  const controls = useAnimation();
  const [activeStep, setActiveStep] = React.useState(0);
  const [goingBack, setGoingBack] = React.useState(false);
  const maxSteps = imageData.length;

  React.useEffect(() => {
    // controls.set({
    //   opacity: 0,
    //   x: "-100px",
    // });
    controls.start({
      // opacity: 1,
      y: 0,
      x: 0,
      decelerate: 3000,
    });
    return () => {
      controls.stop();
    };
  }, [activeStep]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep === imageData.length - 1 ? 0 : prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      prevActiveStep === 0 ? 0 : prevActiveStep - 1
    );
  };

  //   const handleStepChange = (step: number) => {
  //     setActiveStep(step);
  //   };

  React.useEffect(() => {
    let backTimeout: number;
    let forwardTimeout: number;
    function clearTimeouts() {
      if (backTimeout) {
        window.clearTimeout(backTimeout);
      }
      if (forwardTimeout) {
        window.clearTimeout(forwardTimeout);
      }
    }

    function autoPlay(time: number) {
      const limit = maxSteps - 1;
      if (activeStep === limit) {
        setGoingBack(true);
        backTimeout = window.setTimeout(() => {
          handleBack();
        }, time);
        return;
      }
      if (activeStep === 0) {
        setGoingBack(false);
        forwardTimeout = window.setTimeout(() => {
          handleNext();
        }, time);
      }
      if (
        !goingBack && activeStep < limit
      ) {
        forwardTimeout = window.setTimeout(() => {
          handleNext();
        }, time);
      } else if (activeStep !== 0 && goingBack && activeStep < limit) {
        backTimeout = window.setTimeout(() => {
          handleBack();
        }, time);
      }
    }
    if (loop && maxSteps > 1) {
      autoPlay(7000);
    }
    return () => {
      clearTimeouts();
    };
  }, [activeStep, maxSteps, loop]);

  const shouldShowControlsInTitle = showControlsInTitle && maxSteps > 1;

  return (
    <div className={classes.sliderCardRoot}>
      {showTitle &&
        <Paper square elevation={3} className={classes.header}>
          <Typography
            variant="subtitle2"
            component="h4"
            className={classes.title}
          >
            {shouldShowControlsInTitle &&
              <SliderBackButton
                disabled={activeStep === 0}
                handleBack={handleBack}
              />}
            <span>
              {imageData[activeStep]?.label}
            </span>
            {shouldShowControlsInTitle &&
              <SliderNextButton
                disabled={activeStep === maxSteps - 1}
                handleNext={handleNext}
              />}
          </Typography>
        </Paper>}
      <div
        className={imageContainerClass}
        style={{
          height: height,
          overflow: "hidden",
          minWidth: "100%",
        }}
      >
        <AnimateSharedLayout>
          {imageData.map((data, index) => {
            if (index !== activeStep) return null;
            return <motion.div
              layout
              layoutId="outline"
              key={index}
              title={data?.label}
              role="img"
              style={{
                height: height,
                width: "100%",
                minWidth: "100%",
                overflow: "hidden",
                background: `url(${data.imgPath})`,
                position: "relative",
                transition: "background 1s ease-in",
                backgroundSize: "cover",
                backgroundPosition: "center 0",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
              }}
              initial={goingBack
                ? {
                  x: -100,
                }
                : {
                  // opacity: 0,
                  x: 100,
                }}
              exit={goingBack
                ? {
                  x: 100,
                }
                : {
                  x: -100,
                }}
              animate={controls}
              transition={{ type: "spring", stiffness: 550, damping: 20 }}
              className={classes.img}
            >
              {showBackdrop &&
                <span className={classes.imageBackdrop} />}
            </motion.div>;
          })}
        </AnimateSharedLayout>
        {/* <motion.div
          key={activeStep}
          title={imageData[activeStep]?.label}
          role="img"
          style={{
            height: height,
            width: "100%",
            minWidth: "100%",
            overflow: "hidden",
            background: `url(${imageData[activeStep].imgPath})`,
            position: "relative",
            transition: "background 1s ease-in",
            backgroundSize: "cover",
            backgroundPosition: "center 0",
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
          }}
          initial={{ opacity: 0 }}
          exit={{ opacity: [0.5, 0] }}
          animate={controls}
          // animate={{ opacity: [0.5, 0.8, 1] }}
          transition={{
            easings: ["easeIn", "easeOut"],
            duration: 0.9,
            type: "tween",
          }}
          // transition={{ type: "inertia", velocity: 1 }}
          className={classes.img}
        >
          {showBackdrop &&
            <span className={classes.imageBackdrop} />}
        </motion.div> */}
      </div>
      <>
        {/* <ShowHideImage show={true}>
          <Img
            url={imageData[activeStep].imgPath}
            title={imageData[activeStep].label}
            role="img"
            className={classes.img}
          >
            <span className={classes.imageBackdrop} />
          </Img>
        </ShowHideImage> */}
      </>
      {showControls && maxSteps > 1 &&
        <MobileStepper
          className={classes.stepper}
          steps={maxSteps}
          position="static"
          variant="progress"
          LinearProgressProps={{
            color: "secondary",
          }}
          activeStep={activeStep}
          backButton={<SliderBackButton
            disabled={activeStep === 0}
            handleBack={handleBack}
          />}
          nextButton={<SliderNextButton
            disabled={activeStep === maxSteps - 1}
            handleNext={handleNext}
          />}
        />}
    </div>
  );
}

function SliderNextButton(
  { disabled, handleNext }: { handleNext: () => void; disabled: boolean },
) {
  const theme = useTheme();
  return <IconButton
    size="small"
    color="inherit"
    onClick={handleNext}
    disabled={disabled}
  >
    {/* Next */}
    {theme.direction === "rtl"
      ? <KeyboardArrowLeft color="inherit" />
      : <KeyboardArrowRight color="inherit" />}
  </IconButton>;
}

function SliderBackButton(
  { disabled, handleBack }: { handleBack: () => void; disabled: boolean },
) {
  const theme = useTheme();
  return <IconButton
    size="small"
    color="inherit"
    onClick={handleBack}
    // disabled={activeStep === 0}
    disabled={disabled}
  >
    {theme.direction === "rtl"
      ? <KeyboardArrowRight color="inherit" />
      : <KeyboardArrowLeft color="inherit" />}
    {/* Back */}
  </IconButton>;
}

export default SliderCard;

import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const ShowHideImage = styled.div<{ show: boolean }>`
    /* display: ${(props) => props.show ? "block" : "none"}; */
    /* transform: ${(props) =>
  props.show ? "translate(0)" : "translate(-10000%)"}; */
    transition: all 200ms ease-in-out;
    /* animation: ${rotate} 2s linear; */
    will-change: transform;
`;

export interface ImageToSlider {
  label: string;
  imgPath: string;
}

interface Props {
  imageData: ImageToSlider[];
}

// const MAX_HEIGHT = 600;
const MAX_WIDTH = 500;
const BORDER_RADIUS = 6;

const Img = styled.div<{ url: string }>`
        height:100%;
    display: block;
    max-width: ${MAX_WIDTH}px;
    min-height: 600px;
    overflow: hidden;
    width: 100%;
    /* background: transparent; */
    background: url(${(props) => props.url});
    position: relative;
    transition: background 1s ease-in;
    background-size:cover;
    background-repeat: no-repeat;
    object-fit: cover;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: MAX_WIDTH,
    flexGrow: 1,
    margin: "auto",
    marginBottom: "1rem",
    position: "relative",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    // paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    border: "1px outset",
    borderBottom: 0,
    borderRight: 0,
    position: "relative",
  },
  img: {
    height: "100%",
    // maxHeight: MAX_HEIGHT,
    display: "block",
    maxWidth: MAX_WIDTH,
    overflow: "hidden",
    width: "100%",
    position: "relative",
    transition: "all 200ms ease-in-out",
  },
  stepper: {
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
}));

function SliderCard({ imageData }: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = imageData.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      return prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
        backTimeout = window.setTimeout(() => {
          setActiveStep(0);
        }, time);
        return;
      }
      if (
        activeStep < limit
      ) {
        forwardTimeout = window.setTimeout(() => {
          handleNext();
        }, time);
      }
    }
    if (maxSteps > 1) {
      autoPlay(7000);
    }
    return () => {
      clearTimeouts();
    };
  }, [activeStep, maxSteps]);

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography variant="subtitle2" component="h4">
          {imageData[activeStep].label}
        </Typography>
      </Paper>
      <>
        <ShowHideImage show={true}>
          <Img
            url={imageData[activeStep].imgPath}
            title={imageData[activeStep].label}
            role="img"
          >
          </Img>
          {/* <img
            className={classes.img}
            src={imageData[activeStep].imgPath}
            alt={imageData[activeStep].label}
          /> */}
        </ShowHideImage>
        {/* {imageData.map((step, index) => (
          <ShowHideImage show={activeStep === index} key={step.label}>
            <img
              className={classes.img}
              src={step.imgPath}
              alt={step.label}
            />
          </ShowHideImage>
        ))} */}
      </>
      {maxSteps > 1 &&
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="text"
          activeStep={activeStep}
          nextButton={<Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl"
              ? <KeyboardArrowLeft />
              : <KeyboardArrowRight />}
          </Button>}
          backButton={<Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === "rtl" ? <KeyboardArrowRight />
            : <KeyboardArrowLeft />}
            Back
          </Button>}
        />}
    </div>
  );
}

export default SliderCard;

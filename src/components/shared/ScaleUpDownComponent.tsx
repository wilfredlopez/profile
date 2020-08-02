import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TERTIARY_COLOR,
} from "@root/styles/getTheme";
import { AnimationProps, motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

interface Props {
  /**
   * number to scale up to. defaults to 1.2
   */
  scaleTo?: number;
  /**
   * a tuple of strings of colors. defaults to ["#ff6699", "#6666ff"]
   * pass an empty array to disable the effect
   */
  backgrounds?: [string, string];
}

const scaleTransition = {
  scale: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut",
    // repeatDelay: 0.5,
  },
  backgroundColor: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.5,
  },
};

const ScaleUpDownComponent = (
  {
    backgrounds = [TERTIARY_COLOR, SECONDARY_COLOR],
    scaleTo = 1,
    children,
  }: PropsWithChildren<Props>,
) => {
  let animate: AnimationProps["animate"] = {
    scale: [0.9, scaleTo],
  };
  if (backgrounds.length > 0) {
    animate.backgroundColor = backgrounds;
  }
  return (
    <motion.div
      style={{ marginTop: 20, marginBottom: 20, borderRadius: 6 }}
      transition={scaleTransition}
      animate={animate}
    >
      {children}
    </motion.div>
  );
};

export default ScaleUpDownComponent;

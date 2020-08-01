import { motion } from "framer-motion";
import React, { PropsWithChildren } from "react";

interface Props {
  percentBounce?: number;
}

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8,
  },
};

const BounceComponent = (
  { percentBounce, children }: PropsWithChildren<Props>,
) => {
  return (
    <motion.div
      style={{ marginTop: 20, marginBottom: 20 }}
      transition={bounceTransition}
      animate={{
        y: [`${percentBounce}%`, `-${percentBounce}%`],
        // backgroundColor: ["#ff6699", "#6666ff"],
      }}
    >
      {children}
    </motion.div>
  );
};

export default BounceComponent;

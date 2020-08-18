import { NonStyledAnchor } from "@components/shared";
import { Grid } from "@material-ui/core";
import { BrandButton } from "@root/theme/Custom";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

interface Props {
  color?:
  | "text"
  | "inherit"
  | "default"
  | "vape"
  | "expense"
  | "shop"
  | "blue"
  | "error"
  | "warning"
  | "tertiary"
  | "success"
  | "primary"
  | "secondary";
  size?: "default" | "medium" | "large" | "small";
  variant?: "text" | "outlined" | "contained";
}

const ShowCaseProjectButton = (
  { color = "default", size = "large", variant }: Props,
) => {
  return (
    <Grid
      container
      justify="center"
      style={{ marginTop: 25, marginBottom: 25 }}
    >
      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 1.3 }}>
        <BrandButton
          color={color}
          size={size}
          variant={variant}
        >
          <Link href="/projects">
            <NonStyledAnchor>
              {"More Projects".toUpperCase()}
            </NonStyledAnchor>
          </Link>
        </BrandButton>
      </motion.div>
    </Grid>
  );
};

export default ShowCaseProjectButton;

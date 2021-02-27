import { NonStyledAnchor } from "@components/shared"
import { Grid } from "@material-ui/core"
import { BrandButton } from "@root/theme/Custom"
// import { motion } from "framer-motion"
import Link from "next/link"

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
  | "secondary"
  size?: "default" | "medium" | "large" | "small"
  variant?: "text" | "outlined" | "contained"
}

const ShowCaseProjectButton = (
  { color = "default", size = 'large', variant = 'text' }: Props,
) => {
  return (
    <Grid
      container
      justify="center"
      style={{ marginTop: 25, marginBottom: 25 }}
    >
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
    </Grid>
  )
}

export default ShowCaseProjectButton

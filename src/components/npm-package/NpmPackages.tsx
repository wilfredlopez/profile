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
} from "@material-ui/core";
import { NnmPackage, NPM_PACKAGES } from "./NPM_PACKAGES";
import { BrandButton } from "@root/styles/Custom";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { DividerElement } from "../shared";
import { findIndex, Position, move } from "../shared/find-index";

interface Props {
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

const useNpmStyles = makeStyles((theme) => {
  return {
    wrapper: {
      color: "#000",
      background: "#fff",
    },
    cardRoot: {
      color: "#000",
      background: "#fff",
      justifyContent: "center",
      height: 200,
      alignItems: "flex-start",
      display: "flex",
      flexDirection: "column",
    },
  };
});

const NpmPackages = (props: Props) => {
  const classes = useNpmStyles();
  const positions = useRef<Position[]>([]).current;
  const [items, setItems] = React.useState(NPM_PACKAGES);
  const setPosition = (i: number, offset: Position) => (positions[i] = offset);

  const moveItem = (i: number, dragOffset: number) => {
    const targetIndex = findIndex(i, dragOffset, positions);
    if (targetIndex !== i) {
      setItems(move(items, i, targetIndex));
    }
  };
  return (
    <Box mb={2}>
      <Paper className={classes.wrapper} elevation={0}>
        <Container>
          <Box my={2}>
            <DividerElement>
              <Typography align="center">NPM Packages</Typography>
            </DividerElement>
          </Box>
          <Grid
            container
            spacing={2}
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            {items.map((pa, index) => {
              return <Grid key={pa.name} item xs={12} md={6}>
                <NpmPackage
                  data={pa}
                  totalItems={items.length}
                  i={index}
                  moveItem={moveItem}
                  setPosition={setPosition}
                />
              </Grid>;
            })}
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
};

interface PackProps {
  data: NnmPackage;
  i: number;
  totalItems: number;
  setPosition: (i: number, pos: Position) => void;
  moveItem: (i: number, dragOffset: number) => void;
}

const onTop = { zIndex: 1 };
const flat = {
  zIndex: 0,
  transition: { delay: 0.3 },
};

function NpmPackage({ data, i, moveItem, setPosition, totalItems }: PackProps) {
  const classes = useNpmStyles();
  const [isDragging, setDragging] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [copyMessageOpen, setCopyMessageOpenTo] = React.useState(false);
  // Update the measured position of the item so we can calculate when we should rearrange.
  React.useEffect(() => {
    setPosition(i, {
      height: ref.current!.offsetHeight,
      top: ref.current!.offsetTop,
    });
  });

  return (<>
    <Snackbar
      open={copyMessageOpen}
      autoHideDuration={1000}
      onClose={() => {
        setCopyMessageOpenTo(false);
      }}
    >
      <Box position="absolute" bottom="0" left="25%" width={400}>
        <BrandButton color="success">
          {/* <Alert onClose={ setCopyMessageOpenTo(false)} severity="success"> */}
          <Box display="block" width="100%">
            <span>
              Copied to clipboard
            </span>
          </Box>
          {/* </Alert> */}
        </BrandButton>
      </Box>
    </Snackbar>
    <motion.div
      drag={true}
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
        style={{
          background: i === (totalItems - 1)
            ? "rgba(247,247, 247,.83)"
            : "white",
        }}
      >
        <CardHeader
          title={data.name}
          subheader={data.command}
          action={<Box width="100%" justifyContent="flex-end">
            <BrandButton
              size="small"
              onClick={() => {
                navigator.clipboard.writeText(data.command || "");
                setCopyMessageOpenTo(true);
              }}
              style={{
                position: "absolute",
                right: 12,
              }}
              variant="outlined"
              color="success"
            >
              Copy
            </BrandButton>
          </Box>}
        >
        </CardHeader>
        <CardContent>
          <Typography variant="body2">
            {data.description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  </>);
}

export default NpmPackages;

// import { StyledHtmlLink } from "@components/shared";
// import SliderCard, { ImageToSlider } from "@components/shared/SliderCard";
// import {
//   Container,
//   Grid,
//   Typography,
// } from "@material-ui/core";
// import { BrandButton, ImageButton } from "@root/styles/Custom";
// import useSharedStyles from "@root/styles/useSharedStyles";
// import React from "react";
// import styled from "styled-components";

// interface Props {
//   url: string;
//   images: ImageToSlider[];
//   name: string;
//   classKey: "vape" | "expense" | "shop";
//   title: string;
//   showSliderControls?: boolean;
//   loop?: boolean;
// }

// export const DividerElement = styled.div`
//   font-size: 1rem;
//     display: table;
//     white-space: nowrap;
//     height: auto;
//     line-height: 1;
//   &::before,::after{
//     content: "";
//     display: table-cell;
//     position: relative;
//     top: 50%;
//     width: 50%;
//     background-repeat: no-repeat;
//   }
//   &::before{
//     background-position: right 1em top 50%;
//     background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC");
//   }
//   &::after{
//     background-position: left 1em top 50%;
//     background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAAACCAYAAACuTHuKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OThBRDY4OUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OThBRDY4QUNDMTYxMUU0OUE3NUVGOEJDMzMzMjE2NyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5OEFENjg3Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5OEFENjg4Q0MxNjExRTQ5QTc1RUY4QkMzMzMyMTY3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VU513gAAADVJREFUeNrs0DENACAQBDBIWLGBJQby/mUcJn5sJXQmOQMAAAAAAJqt+2prAAAAAACg2xdgANk6BEVuJgyMAAAAAElFTkSuQmCC");
//   }
// `;

// export const TitleLink = styled(StyledHtmlLink)`
//   font-size: 1.2rem;
//   color: ${(props) => props.theme.colors.secondary};
//   font-weight: 500;
// `;

// const Project: React.FC<Props> = (
//   { showSliderControls = true, url, name, title, loop, ...props },
// ) => {
//   const classes = useSharedStyles();
//   return (
//     <>
//       <DividerElement
//         className="header project-tile"
//         style={{ textTransform: "uppercase", marginTop: "1rem" }}
//       >
//         <TitleLink
//           href={url}
//           target="_blank"
//           rel="noopener noreferrer"
//           title={name}
//         >
//           {name}
//         </TitleLink>
//       </DividerElement>

//       <Container
//         maxWidth="md"
//         style={{
//           alignItems: "center",
//           justifyContent: "center",
//           margin: "auto",
//           display: "flex",
//           flexDirection: "column",
//         }}
//         classes={{
//           root: classes.minPaddingX,
//         }}
//       >
//         <Typography variant="body1" component="div">
//           {props.children}
//           {props.images.length > 1 &&
//             <SliderCard
//               showControls={showSliderControls}
//               imageData={props.images}
//               height={750}
//               loop={loop}
//               showTitle
//             />}
//         </Typography>
//       </Container>
//       {props.images.length === 1 &&
//         <div>
//           <StyledHtmlLink
//             className={classes.minPaddingX.concat(" " + classes.flexCenter)}
//             href={url}
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{
//               marginBottom: "1rem",
//             }}
//           >
//             <ImageButton
//               title={title}
//               url={props.images[0].imgPath}
//               width={520}
//               minHeight={500}
//               buttomProps={{}}
//             />
//           </StyledHtmlLink>
//         </div>}

//       <div style={{ marginBottom: "1rem" }} />
//       <Grid
//         container
//         alignItems="center"
//         justify="center"
//         style={{ paddingBottom: "1rem" }}
//       >
//         <Grid item>
//           <BrandButton color={props.classKey} size="medium" variant="contained">
//             <StyledHtmlLink href={url} className="text-white" title={name}>
//               {name.toUpperCase()}
//             </StyledHtmlLink>
//           </BrandButton>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default Project;
export {};

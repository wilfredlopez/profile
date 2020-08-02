import React from "react";
import {
  FaReact,
  FaMicrosoft,
  FaSalesforce,
  FaJira,
  FaUniversalAccess,
  // FaBriefcase,
} from "react-icons/fa";

import {
  IoLogoJavascript,
  IoLogoSass,
  IoLogoHtml5,
  IoLogoNodejs,
  IoMdCalendar,
  IoMdChatboxes,
} from "react-icons/io";
import TypescriptIcon from "../custom-icons/TypescriptIcon";
import GraphQlIcon from "../custom-icons/GraphQLIcon";
import { SECONDARY_COLOR } from "@root/theme/getTheme";
import { List, Typography } from "@material-ui/core";
import { motion } from "framer-motion";
import styled from "styled-components";
const SIZE = "24px";

export const educationIcons = [
  { Icon: <FaReact style={{ fill: "#61dafb" }} size={SIZE} />, label: "React" },
  { Icon: <TypescriptIcon sizeInPx={SIZE} />, label: "Typescript" },
  { Icon: <GraphQlIcon sizeInPx={SIZE} />, label: "GraphQL" },
  {
    Icon: <IoLogoNodejs size={SIZE} color="#215732" />,
    label: "NodeJS with Express and MongoDB",
  },
  {
    Icon: <FaUniversalAccess size={SIZE} color={SECONDARY_COLOR} />,
    label: "Web Accessibility",
  },
  {
    Icon: <IoLogoJavascript size={SIZE} color="#ffe302" />,
    label: "Javascript",
  },
  { Icon: <FaJira size={SIZE} color="#172B4D" />, label: "Confluence Jira" },
  { Icon: <IoLogoSass size={SIZE} color="#c69" />, label: "SASS / CSS3" },
  { Icon: <IoLogoHtml5 size={SIZE} color="e34f26" />, label: "HTML 5" },
  {
    Icon: <FaSalesforce size={SIZE} color="#009EDB" />,
    label: "Salesforce Commerce Cloud",
  },
  {
    Icon: <IoMdCalendar size={SIZE} color={SECONDARY_COLOR} />,
    label: "Workforce Management",
  },
  {
    Icon: <FaMicrosoft size={SIZE} color="#F25022" />,
    label: "Microsoft Office, Excel VBA",
  },
  {
    Icon: <IoMdChatboxes size={SIZE} color={SECONDARY_COLOR} />,
    label: "Bilingual (English, Spanish)",
  },
] as const;

const StyledItem = styled.li`
  padding-top: 0;
  padding-bottom: 6px;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  text-align: left;
    font-size: 1.5rem;
    border-bottom: 1px solid #dcd5d5;
    /* transition: all 100ms ease-in-out; */
    /* &:hover{
      transform: translate(10px);
    } */
`;

export const EducationList = () => {
  return <List>
    {educationIcons.map(({ label, Icon }, index) => {
      return (
        <StyledItem key={label + "-" + index}>
          <>
            <motion.div
              whileTap={{ scale: 1.2 }}
              whileHover={{ scale: 1.3 }}
            >
              <Typography variant="subtitle1" component="h3">
                {Icon}
                <span>{" "}</span>
                {label}
              </Typography>
            </motion.div>
          </>
        </StyledItem>
      );
    })}
  </List>;
};

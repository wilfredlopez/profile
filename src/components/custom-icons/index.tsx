import React from "react";
import {
  FaReact,
  FaMicrosoft,
  FaSalesforce,
  FaJira,
  FaUniversalAccess,
  FaBriefcase,
  // FaDatabase,
} from "react-icons/fa";

import {
  IoLogoJavascript,
  IoLogoSass,
  IoLogoHtml5,
  IoLogoNodejs,
  IoMdCalendar,
  IoMdChatboxes,
} from "react-icons/io";
import TypescriptIcon from "./TypescriptIcon";
import GraphQlIcon from "./GraphQLIcon";
import { SECONDARY_COLOR } from "@root/styles/getTheme";

const ExpIcon = <FaBriefcase color="#00796b" />;

export const experiences = [
  {
    Icon: ExpIcon,
    label: "Web Production QA Analyst",
    location: "Century 21 Stores",
    isCurrent: false,
  },
  {
    Icon: ExpIcon,
    label: "Suppor Center Specialist",
    location: "Century 21 Stores",
    isCurrent: false,
  },
  {
    Icon: ExpIcon,
    label: "Mission Control Specialist",
    location: "Teleperformance",
    isCurrent: false,
  },
  {
    Icon: ExpIcon,
    label: "Customer Service Representative",
    location: "Teleperformance",
    isCurrent: false,
  },
  {
    Icon: ExpIcon,
    label: "Call Center QA Analyst",
    location: "BM Teleservices",
    isCurrent: false,
  },
] as const;
const SIZE = "24px";

export const education = [
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

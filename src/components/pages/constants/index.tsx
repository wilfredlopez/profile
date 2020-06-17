import React from "react";
import {
  FaReact,
  FaMicrosoft,
  FaSalesforce,
  FaJira,
  FaUniversalAccess,
  FaBriefcase,
  // FaDatabase,
} from "react-icons/fa/index";

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
import { SECONDARY_COLOR } from "styles/ThemeContainer";

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

export const retailmeNowDescription: JSX.Element = (
  <>
    <p>RetalMeNow an online retail store.</p>
    <p>
      Shop Cloathing and other items at a low price. Create your account, add to
      your shopping cart and checkout.
    </p>
  </>
);

export const expenseManagerDescription = (
  <>
    <p>
      {" "}
      Expenses Manager is a Windows/Mac/IOS, Android and Web Application that
      helps you manage your personal finances.
    </p>
    <p>
      Add your monthly plans for income and expenses. Add transactions and keep
      track of everything.
    </p>
  </>
);

export const vapeMusicDescription = (
  <>
    <p>
      Progressive Web App for listening and downloading promotional music.
      combined with a GraphQl API that can serve song lists from the database.
      The user can Like songs and add to the playlist/favorites.
    </p>
    <p>
      The admin can add/remove, upload image and audio directly from the site.
    </p>
    <p>
      Songs are distributed by genre and artists, Users can search, add songs to
      the playlist and use the Audio Player to switch from song to song.
    </p>
  </>
);

export const easyTodosDescription = (
  <>
    {" "}
    <p>
      {" "}
      EasyTodos is a simple solution to keep track of your daily tasks. This app
      is great to manage your daily job or just to have a place to keep relevant
      information that regards to a particular task.
    </p>
    <p>
      All todos have a "Notes" section that can be styled and edited very easy.
      You can filter the list, mark a todo as completed or find a completed todo
      an have it listed back again.
    </p>
  </>
);

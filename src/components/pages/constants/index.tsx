import React from "react";
import {
  FaReact,
  FaMicrosoft,
  FaSalesforce,
  FaJira,
  FaUniversalAccess,
  FaDatabase,
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

export const experiences = [
  {
    Icon: "marker",
    label: "Web Production QA Analyst",
    location: "Century 21 Stores",
    isCurrent: false,
  },
  {
    Icon: "marker",
    label: "Suppor Center Specialist",
    location: "Century 21 Stores",
    isCurrent: false,
  },
  {
    Icon: "marker",
    label: "Mission Control Specialist",
    location: "Teleperformance",
    isCurrent: false,
  },
  {
    Icon: "marker",
    label: "Customer Service Representative",
    location: "Teleperformance",
    isCurrent: false,
  },
  {
    Icon: "marker",
    label: "Call Center QA Analyst",
    location: "BM Teleservices",
    isCurrent: false,
  },
] as const;

export const education = [
  { Icon: <FaReact />, label: "React" },
  { Icon: <TypescriptIcon sizeInPx="20px" />, label: "Typescript" },
  { Icon: <FaDatabase />, label: "GraphQL" },
  { Icon: <IoLogoNodejs />, label: "NodeJS with Express and MongoDB" },
  { Icon: <FaUniversalAccess />, label: "Web Accessibility" },
  { Icon: <IoLogoJavascript />, label: "Javascript" },
  { Icon: <FaJira />, label: "Confluence Jira" },
  { Icon: <IoLogoSass />, label: "SASS / CSS3" },
  { Icon: <IoLogoHtml5 />, label: "HTML 5" },
  { Icon: <FaSalesforce />, label: "Salesforce Commerce Cloud" },
  { Icon: <IoMdCalendar />, label: "Workforce Management" },
  { Icon: <FaMicrosoft />, label: "Microsoft Office, Excel VBA" },
  { Icon: <IoMdChatboxes />, label: "Bilingual (English, Spanish)" },
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

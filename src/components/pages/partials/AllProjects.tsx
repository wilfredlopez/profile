import React from "react";
import VapeMusic from "./VapeMusic";
import RetailMeNow from "./RetailMeNow";
import ExpensesManager from "./ExpensesManager";

interface Props {
}

const AllProjects = (props: Props) => {
  return (
    <>
      <VapeMusic />
      <RetailMeNow />
      <ExpensesManager />
    </>
  );
};

export default AllProjects;

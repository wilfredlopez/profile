import React from "react";
import VapeMusic from "./VapeMusic";
import RetailMeNow from "./RetailMeNow";
import ExpensesManager from "./ExpensesManager";

interface Props {
  showSliderControls?: boolean;
  loop?: boolean;
}

const AllProjects = ({ showSliderControls = true, loop }: Props) => {
  return (
    <>
      <VapeMusic showSliderControls={showSliderControls} loop={loop} />
      <RetailMeNow showSliderControls={showSliderControls} loop={loop} />
      <ExpensesManager showSliderControls={showSliderControls} loop={loop} />
    </>
  );
};

export default AllProjects;

import React from "react";
import Project from "./Project";
import { expenseManagerDescription } from "../constants";

import { PROJECT_IMAGES } from "../constants/projectImages";
interface Props {
  showSliderControls?: boolean;
  loop?: boolean;
}

const ExpensesManager = ({ showSliderControls = true, loop }: Props) => {
  return (
    <Project
      loop={loop}
      showSliderControls={showSliderControls}
      classKey="expense"
      images={PROJECT_IMAGES.ExpenseManger}
      url="https://wilfredexpensemanager.netlify.app"
      name="Expenses Manager"
      title="Expenses Manager - Manage your personal finances"
    >
      {expenseManagerDescription}
    </Project>
  );
};

export default ExpensesManager;

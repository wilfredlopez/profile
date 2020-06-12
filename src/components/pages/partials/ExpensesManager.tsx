import React from "react";
import Project from "./Project";
import { expenseManagerDescription } from "../constants";
import expenseManagerImg from "../../../img/expense-manager-example.jpg";
interface Props {
}

const ExpensesManager = (props: Props) => {
  return (
    <Project
      images={[{
        label: "HomePage",
        imgPath: expenseManagerImg,
      }]}
      url="https://wilfredexpensemanager.netlify.app"
      name="Expenses Manager"
      title="Expenses Manager - Manage your personal finances"
    >
      {expenseManagerDescription}
    </Project>
  );
};

export default ExpensesManager;

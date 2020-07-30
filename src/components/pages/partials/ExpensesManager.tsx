import React from "react";
import Project from "./Project";
import { expenseManagerDescription } from "../constants";
import expenseManagerImg from "../../../img/expenses-manager-home.png";
import exLogin from "../../../img/expenses-manager-login.png";
import transPage from "../../../img/expenses-manager-transactions.png";
import { ImageToSlider } from "@components/shared/SliderCard";
interface Props {
}

const Images: ImageToSlider[] = [
  {
    label: "HomePage",
    imgPath: expenseManagerImg,
  },
  {
    label: "Login Page",
    imgPath: exLogin,
  },
  {
    label: "Transactions",
    imgPath: transPage,
  },
];

const ExpensesManager = (props: Props) => {
  return (
    <Project
      classKey="expense"
      images={Images}
      url="https://wilfredexpensemanager.netlify.app"
      name="Expenses Manager"
      title="Expenses Manager - Manage your personal finances"
    >
      {expenseManagerDescription}
    </Project>
  );
};

export default ExpensesManager;

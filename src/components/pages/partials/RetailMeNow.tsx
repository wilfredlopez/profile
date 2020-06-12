import React from "react";
import Project from "./Project";
import { retailmeNowDescription } from "../constants";
import retailmenowImg from "../../../img/retailmenow.jpeg";
interface Props {
}

const RetailMeNow = (props: Props) => {
  return (
    <Project
      images={[
        { label: "PDP", imgPath: retailmenowImg },
      ]}
      url="#"
      name="RetalMeNow"
      title="RetalMeNow - Shop Online"
    >
      {retailmeNowDescription}
    </Project>
  );
};

export default RetailMeNow;

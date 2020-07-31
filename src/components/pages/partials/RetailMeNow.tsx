import React from "react";
import Project from "./Project";
import { retailmeNowDescription } from "../constants";
import { PROJECT_IMAGES } from "../constants/projectImages";
interface Props {
  showSliderControls?: boolean;
  loop?: boolean;
}

const RetailMeNow = ({ showSliderControls = true, loop }: Props) => {
  return (
    <Project
      loop={loop}
      classKey="shop"
      showSliderControls={showSliderControls}
      images={PROJECT_IMAGES.retailMeNow}
      url="#"
      name="RetalMeNow"
      title="RetalMeNow - Shop Online"
    >
      {retailmeNowDescription}
    </Project>
  );
};

export default RetailMeNow;

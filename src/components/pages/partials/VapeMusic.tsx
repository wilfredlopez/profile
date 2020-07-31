import React from "react";
import Project from "./Project";
import { vapeMusicDescription } from "../constants";
import { PROJECT_IMAGES } from "../constants/projectImages";
interface Props {
  showSliderControls?: boolean;
  loop?: boolean;
}

const VapeMusic = ({ showSliderControls = true, loop }: Props) => {
  return (
    <Project
      loop={loop}
      showSliderControls={showSliderControls}
      classKey="vape"
      images={PROJECT_IMAGES.vapeMusic}
      url="https://vapemusic.club"
      name="Vape Music"
      title="Vape Music - Latin Music Listen & Download"
    >
      {vapeMusicDescription}
    </Project>
  );
};

export default VapeMusic;

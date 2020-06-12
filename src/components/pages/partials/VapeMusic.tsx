import React from "react";
import Project from "./Project";
import { vapeMusicDescription } from "../constants";
import vapemusicImg from "../../../img/vapemusic-example.jpg";
interface Props {
}

const VapeMusic = (props: Props) => {
  return (
    <Project
      images={[{
        label: "VapeMusic HomePage",
        imgPath: vapemusicImg,
      }, {
        label: "VapeMusic Menu",
        imgPath:
          "https://res.cloudinary.com/wlopez/image/upload/v1591918889/vapemusic2/vapemusic-menu.jpg",
      }, {
        imgPath:
          "https://res.cloudinary.com/wlopez/image/upload/v1591921388/vapemusic2/vapemusic-pdp.jpg",
        label: "Audio Player",
      }]}
      url="https://vapemusic.club"
      name="Vape Music"
      title="Vape Music - Latin Music Listen & Download"
    >
      {vapeMusicDescription}
    </Project>
  );
};

export default VapeMusic;

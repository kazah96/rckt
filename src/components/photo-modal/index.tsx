import React, { FC } from "react";
import { UnsplashApiPhoto } from "../../types/unsplash";

import style from "./style.module.css";

interface Props {
  photo: UnsplashApiPhoto;
  onClick: () => void;
}

const PhotoModal: FC<Props> = ({ photo, onClick }) => {
  return (
    <div className={style.photoContainer} onClick={onClick}>
      <img
        className={style.image}
        src={photo.urls.regular}
        alt={photo.alt_description}
      ></img>
    </div>
  );
};

export default PhotoModal;

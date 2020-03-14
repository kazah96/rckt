import React, { FC, useContext, useState } from "react";
import cn from "classnames";
import { UnsplashApiPhoto } from "../../types/unsplash";

import MaximizeIcon from "../../resourse/svg/maximize.svg";
import DownloadIcon from "../../resourse/svg/download.svg";
import LikeIcon from "../../resourse/svg/like.svg";

import style from "./style.module.css";
import { PhotoContext } from "../../contexts/photo";
import PhotoModal from "../photo-modal";

interface Props {
  photo: UnsplashApiPhoto;
  span?: number;
}

const Photo: FC<Props> = ({ photo, span }) => {
  const photoContext = useContext(PhotoContext);
  const isPhotoFavorite = photoContext.isPhotoFavorite(photo);
  const [showModal, setShowModal] = useState<boolean>(false);

  const setFavorite = () =>
    isPhotoFavorite
      ? photoContext.removeFavoritePhoto(photo)
      : photoContext.addFavoritePhoto(photo);

  return (
    <div className={style.photoContainer} style={{gridRowEnd: `span ${span}`}}>
      <img
        className={style.image}
        src={photo.urls.regular}
        alt={photo.alt_description}
      ></img>
      <div className={style.overlayContainer}>
        <img
          className={style.avatar}
          src={photo.user.profile_image.medium}
          alt={photo.user.bio}
        />
        <h2>
          {photo.user.first_name} {photo.user.last_name}
        </h2>
        <h4>@{photo.user.instagram_username}</h4>
        <div className={style.buttons}>
          <div
            onClick={setFavorite}
            className={cn(style.button, { [style.red]: isPhotoFavorite })}
          >
            <LikeIcon />
          </div>
          <div className={style.button} onClick={() => setShowModal(true)}>
            <MaximizeIcon />
          </div>
          <a
            href={photo.urls.full}
            target="_blank"
            rel="noopener noreferrer"
            className={style.button}
          >
            <DownloadIcon />
          </a>
        </div>
      </div>
      {showModal && (
        <PhotoModal photo={photo} onClick={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Photo;

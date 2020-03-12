import React, { FC, useState } from "react";
import cn from "classnames";
import { UnsplashApiPhoto } from "../../types/unsplash";

import MaximizeIcon from "../../resourse/svg/maximize.svg";
import DownloadIcon from "../../resourse/svg/download.svg";
import LikeIcon from "../../resourse/svg/like.svg";

import style from "./style.module.css";

interface Props {
  photo: UnsplashApiPhoto;
}

const Photo: FC<Props> = ({ photo }) => {
  return (
    <div className={style.photoContainer}>
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
          <div className={style.button}>
            <LikeIcon />
          </div>
          <a
            href={photo.urls.full}
            target="_blank"
            rel="noopener noreferrer"
            className={style.button}
          >
            <MaximizeIcon />
          </a>
          <div className={style.button}>
            <DownloadIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;

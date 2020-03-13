import React, { useContext } from "react";

import style from "./style.module.css";

import PhotoPanel from "../../components/photo-panel";
import { PhotoContext } from "../../contexts/photo";

function Favorites() {
  const photoContext = useContext(PhotoContext);

  let photos = [];

  photoContext.favoritePhotos.forEach(item => {
    photos.push(item);
  });

  console.log(photos)

  return (
    <React.Fragment>
      <div className={style.header}>
        <h1 className="heading2">Избранное</h1>
      </div>
      <PhotoPanel photos={photos} />
    </React.Fragment>
  );
}

export default Favorites;

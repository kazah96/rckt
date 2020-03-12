import React, { useEffect, useState, useContext } from "react";

import style from "./style.module.css";

import { UnsplashApiPhoto } from "../../types/unsplash";
import { getFavoritePhotos } from "../../api/unsplash";
import PhotoPanel from "../../components/photo-panel";

function Favorites() {
  const [photos, setPhotos] = useState<Array<UnsplashApiPhoto>>([]);

  useEffect(() => {
    (async () => setPhotos(await getFavoritePhotos("poquepoque27")))();
  }, []);

  return (
    <React.Fragment>
      <div className={style.header}>
        <h1 className='heading2'>Избранное</h1>
      </div>
      <PhotoPanel photos={photos} />
    </React.Fragment>
  );
}

export default Favorites;

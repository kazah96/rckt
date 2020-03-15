import React, { useContext, FC } from "react";

import style from "./style.module.css";

import PhotoPanel from "../../components/photo-panel";
import { PhotoContext } from "../../contexts/photo";
import { UnsplashApiPhoto } from "../../types/unsplash";
import Noresult from "../../components/noresult";

interface Props {
  photos: Array<UnsplashApiPhoto>;
}

const FavoritesPage: FC<Props> = ({ photos }) => {
  return (
    <React.Fragment>
      <div className={style.header}>
        <h1 className="heading2">Избранное</h1>
      </div>
      <PhotoPanel photos={photos} showNoResultsMessage={<Noresult />} />
    </React.Fragment>
  );
};

const Memoized = React.memo(FavoritesPage);

const FavoritesPageMemoized: FC = () => {
  const photoContext = useContext(PhotoContext);

  let photos = [];

  photoContext.favoritePhotos.forEach(item => {
    photos.push(item);
  });

  return <Memoized photos={photos} />;
};

export default FavoritesPageMemoized;

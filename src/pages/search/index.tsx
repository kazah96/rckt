import React, { useState } from "react";
import SearchBar from "../../components/search-bar";

import style from "./style.module.css";

import { UnsplashApiPhoto } from "../../types/unsplash";
import { searchPhoto } from "../../api/unsplash";
import PhotoPanel from "../../components/photo-panel";
import HorizontalWordScroll from "../../components/horizontal-word-scroll";

import Divider from "../../components/divider";

function SearchPage() {
  const [photos, setPhotos] = useState<Array<UnsplashApiPhoto>>([]);

  const searchImages = async (query: string) => {
    const result = await searchPhoto(query);
    setPhotos(result);
  };

  return (
    <React.Fragment>
      <div className={style.searchPanel}>
        <SearchBar onSearch={searchImages} />
        <div className={style.dividerContainer}>
          <Divider />
        </div>
        <HorizontalWordScroll onWordClick={searchImages} />
      </div>
      <PhotoPanel photos={photos} />
    </React.Fragment>
  );
}

export default SearchPage;

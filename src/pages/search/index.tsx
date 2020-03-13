import React, { useState } from "react";
import SearchBar from "../../components/search-bar";

import style from "./style.module.css";

import { UnsplashApiPhoto } from "../../types/unsplash";
import { searchPhoto } from "../../api/unsplash";
import PhotoPanel from "../../components/photo-panel";
import HorizontalWordScroll from "../../components/horizontal-word-scroll";

import Divider from "../../atoms/divider";
import HeaderPanel from "../../atoms/header-panel";

interface PhotoState {
  photos: Array<UnsplashApiPhoto>;
  isLoading: boolean;
}

const initialPhotoState = {
  photos: [],
  isLoading: false
};

function SearchPage() {
  const [photoState, setPhotoState] = useState<PhotoState>(initialPhotoState);

  const setLoading = (loading: boolean) => {
    const state = { ...photoState };
    state.isLoading = loading;
    setPhotoState(state);
  };

  const searchImages = async (query: string) => {
    setLoading(true);
    const photos = await searchPhoto(query);
    setPhotoState({ isLoading: false, photos });
  };

  return (
    <React.Fragment>
      <HeaderPanel>
        <SearchBar onSearch={searchImages} />
        <div className={style.dividerContainer}>
          <Divider />
        </div>
        <HorizontalWordScroll onWordClick={searchImages} />
      </HeaderPanel>
      <PhotoPanel photos={photoState.photos} isLoading={photoState.isLoading} />
    </React.Fragment>
  );
}

export default SearchPage;

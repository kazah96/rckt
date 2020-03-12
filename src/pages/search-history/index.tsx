import React, { useState } from "react";
import cn from "classnames";
import style from "./style.module.css";

import { UnsplashApiPhoto } from "../../types/unsplash";
import { searchPhoto } from "../../api/unsplash";
import PhotoPanel from "../../components/photo-panel";
import WordList from "../../components/word-list";

import HeaderPanel from "../../atoms/header-panel";

function SearchPage() {
  const [photos, setPhotos] = useState<Array<UnsplashApiPhoto>>([]);

  const searchImages = async (query: string) => {
    const result = await searchPhoto(query);
    setPhotos(result);
  };

  return (
    <React.Fragment>
      <HeaderPanel>
        <h2 className={cn(style.heading, "heading2")}>Ваши запросы</h2>
        <WordList />
      </HeaderPanel>
      <PhotoPanel photos={photos} />
    </React.Fragment>
  );
}

export default SearchPage;

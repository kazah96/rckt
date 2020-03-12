import React, { useEffect, useState, useContext } from "react";
import SearchBar from "../../components/search-bar";
import Link from "next/link";

import style from "./style.module.css";

import { PhotoContext } from "../../contexts/photo";
import { UnsplashApiPhoto } from "../../types/unsplash";
import { searchPhoto } from "../../api/unsplash";
import PhotoPanel from "../../components/photo-panel";

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
      </div>
      <PhotoPanel photos={photos} />
    </React.Fragment>
  );
}

export default SearchPage;

import React, { useState, useEffect } from "react";
import SearchBar from "../../components/search-bar";

import style from "./style.module.css";

import HorizontalWordScroll from "../../components/horizontal-word-scroll";

import Divider from "../../atoms/divider";
import HeaderPanel from "../../atoms/header-panel";
import SearchPhotoPanel from "../../components/search-photo-panel";

function SearchPage() {
  const [query, setQuery] = useState<string>();

  useEffect(() => {
    return () => {
      setQuery("");
    };
  }, []);

  return (
    <React.Fragment>
      <HeaderPanel>
        <SearchBar onSearch={setQuery} />
        <div className={style.dividerContainer}>
          <Divider />
        </div>
        <HorizontalWordScroll onWordClick={setQuery} />
      </HeaderPanel>
      <SearchPhotoPanel query={query} />
    </React.Fragment>
  );
}

export default SearchPage;

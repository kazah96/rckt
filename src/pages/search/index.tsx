import React, { useState, useEffect } from "react";
import SearchBar from "../../components/search-bar";
import { useRouter } from "next/router";

import style from "./style.module.css";

import HorizontalWordScroll from "../../components/horizontal-word-scroll";

import Divider from "../../atoms/divider";
import HeaderPanel from "../../atoms/header-panel";
import SearchPhotoPanel from "../../components/search-photo-panel";

function SearchPage() {
  const [query, setQuery] = useState<string>();

  const router = useRouter();

  const getQuery = (): string | null => {
    const query = router.query.q;
    if (typeof query === "string") {
      return query
    }

    return null;
  }

  useEffect(() => {
    return () => {
      setQuery("");
    };
  }, []);

  return (
    <React.Fragment>
      <HeaderPanel>
        <SearchBar query={getQuery()} onSearch={setQuery} />
        <Divider className={style.dividerContainer} />
        <HorizontalWordScroll onWordClick={setQuery} />
      </HeaderPanel>
      <SearchPhotoPanel query={query} />
    </React.Fragment>
  );
}

export default SearchPage;

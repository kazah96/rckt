import React, { useState, useContext } from "react";
import cn from "classnames";
import style from "./style.module.css";

import HeaderPanel from "../../atoms/header-panel";
import QueryList from "../../components/query-list";
import SearchPhotoPanel from "../../components/search-photo-panel";
import { PhotoContext } from "../../contexts/photo";

function SearchPage() {
  const context = useContext(PhotoContext);
  const [query, setQuery] = useState<string>(context.previousQueries[0]);

  return (
    <React.Fragment>
      <HeaderPanel>
        <h2 className={cn(style.heading, "heading2")}>Ваши запросы</h2>
        <QueryList onWordClick={setQuery} />
      </HeaderPanel>
      <SearchPhotoPanel query={query} />
    </React.Fragment>
  );
}

export default SearchPage;

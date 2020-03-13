import React, { useState, useContext, FC } from "react";
import cn from "classnames";
import style from "./style.module.css";

import HeaderPanel from "../../atoms/header-panel";
import QueryList from "../../components/query-list";
import SearchPhotoPanel from "../../components/search-photo-panel";
import { PhotoContext } from "../../contexts/photo";

interface Props {
  setQuery: (string) => void;
  query: string;
}

const SearchPage: FC<Props> = ({ setQuery, query }) => {
  return (
    <React.Fragment>
      <HeaderPanel>
        <h2 className={cn(style.heading, "heading2")}>Ваши запросы</h2>
        <QueryList onWordClick={setQuery} />
      </HeaderPanel>
      <SearchPhotoPanel query={query} />
    </React.Fragment>
  );
};

// Против лишних перерендеров
const Memoized = React.memo(SearchPage);

const SearchPageMemoized: FC = () => {
  const { previousQueries } = useContext(PhotoContext);
  const [query, setQuery] = useState<string>(previousQueries[0]);

  return <Memoized query={query} setQuery={setQuery} />;
};

export default SearchPageMemoized;

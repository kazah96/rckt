import React, { useEffect, useState } from "react";

import SearchPhotoPanel from "../../components/search-photo-panel";

const randomWords = ["Sea", "Meme", "Cat"];

function getRandWord() {
  const rand = Math.floor(Math.random() * (randomWords.length));
  return randomWords[rand];
}

function MainPage() {
  const [query, setQuery] = useState<string>(getRandWord());

  useEffect(() => {
    setQuery(getRandWord());
  }, []);

  return (
    <React.Fragment>
      <SearchPhotoPanel query={query} />
    </React.Fragment>
  );
}

export default MainPage;

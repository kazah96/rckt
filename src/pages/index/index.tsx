import React, { useEffect, useState } from "react";

import SearchPhotoPanel from "../../components/search-photo-panel";
import getRandWord from '../../utils/randWord'

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

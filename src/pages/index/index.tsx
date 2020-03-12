import React, { useEffect, useState, useContext } from "react";

import { getRandomPhoto } from "../../api/unsplash";
import { UnsplashApiPhoto } from "../../types/unsplash";
import { PhotoContext } from "../../contexts/photo";

function App() {
  const [photo, setPhoto] = useState<UnsplashApiPhoto | null>(null);

  const qwe = useContext(PhotoContext);

  useEffect(() => {
    (async () => {
      const res = await getRandomPhoto();

      setPhoto(res);
    })();
  }, []);

  return (
    <div className="App">
      {photo && <img src={photo.urls.full} alt={photo.alt_description} />}
    </div>
  );
}

export default App;

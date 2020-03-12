import React, { useEffect, useState } from "react";
import { getRandomPhoto } from "../api/unsplash";
import { UnsplashApiPhono } from "../types/unsplash";

function App() {
  const [photo, setPhoto] = useState<UnsplashApiPhono | null>(null);

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

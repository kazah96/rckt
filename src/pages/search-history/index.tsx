import React, { useEffect, useState, useContext } from "react";

import { getRandomPhoto } from "../../api/unsplash";
import { UnsplashApiPhoto } from "../../types/unsplash";
import { PhotoContext } from "../../contexts/photo";

function App() {
  const { previousQueries } = useContext(PhotoContext);

  return (
    <div className="App">
      {previousQueries.map(item => {
        return <a href={'/sdfsdf'}>{item}</a>;
      })}
    </div>
  );
}

export default App;

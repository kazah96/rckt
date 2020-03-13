import React, { useState, useEffect } from "react";

import { UnsplashApiPhoto } from "../../types/unsplash";
import { searchPhoto } from "../../api/unsplash";
import PhotoPanel from "../../components/photo-panel";

interface PhotoState {
  photos: Array<UnsplashApiPhoto>;
  isLoading: boolean;
}

interface Props {
  query: string;
}

const initialPhotoState = {
  photos: [],
  isLoading: false
};

const SearchPhotoPanel: React.FC<Props> = ({ query }) => {
  const [photoState, setPhotoState] = useState<PhotoState>(initialPhotoState);
  useEffect(() => {
    if (query) {
      (async (query: string) => {
        setPhotoState({ isLoading: true, photos: [] });
        const photos = await searchPhoto(query);
        setPhotoState({ isLoading: false, photos });
      })(query);
    }
  }, [query]);

  return (
    <PhotoPanel photos={photoState.photos} isLoading={photoState.isLoading} />
  );
};

export default SearchPhotoPanel;

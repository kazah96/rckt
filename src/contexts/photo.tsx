import { createContext } from "react";
import React from "react";
import { UnsplashApiPhoto } from "../types/unsplash";

const noop = () => {};

interface PhotoContextState {
  previousQueries: Array<string>;
  favoritePhotos: Map<string, UnsplashApiPhoto>;
}

interface PhotoContextProps extends PhotoContextState {
  addQuery: (query: string) => void;
  addFavoritePhoto: (photo: UnsplashApiPhoto) => void;
  removeFavoritePhoto: (photo: UnsplashApiPhoto) => void;
  isPhotoFavorite: (photo: UnsplashApiPhoto) => boolean;
}

const defaultState: PhotoContextState = {
  previousQueries: [],
  favoritePhotos: new Map()
};

const defaultProps: PhotoContextProps = {
  ...defaultState,
  addQuery: noop,
  addFavoritePhoto: noop,
  removeFavoritePhoto: noop,
  isPhotoFavorite: () => false
};

const PhotoContext = createContext<PhotoContextProps>(defaultProps);

class PhotoContextWrapper extends React.PureComponent {
  state: PhotoContextState = defaultState;

  addQuery = (query: string) => {
    const prevQueries = [...this.state.previousQueries];
    prevQueries.push(query);

    this.setState({ previousQueries: prevQueries });
  };

  addFavoritePhoto = (photo: UnsplashApiPhoto) => {
    const favoritePhotos = new Map(this.state.favoritePhotos);

    favoritePhotos.set(photo.id, photo);

    this.setState({ favoritePhotos });
  };

  removeFavoritePhoto = (photo: UnsplashApiPhoto) => {
    const favoritePhotos = new Map(this.state.favoritePhotos);

    favoritePhotos.delete(photo.id);

    this.setState({ favoritePhotos });
  };

  isPhotoFavorite = (photo: UnsplashApiPhoto) => {
    return this.state.favoritePhotos.has(photo.id);
  };

  get photoContextProps(): PhotoContextProps {
    return {
      ...this.state,
      addQuery: this.addQuery,
      addFavoritePhoto: this.addFavoritePhoto,
      removeFavoritePhoto: this.removeFavoritePhoto,
      isPhotoFavorite: this.isPhotoFavorite
    };
  }

  render() {
    return (
      <PhotoContext.Provider value={this.photoContextProps}>
        {this.props.children}
      </PhotoContext.Provider>
    );
  }
}

export { PhotoContext, PhotoContextWrapper, defaultState };

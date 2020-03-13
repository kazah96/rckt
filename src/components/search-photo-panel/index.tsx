import React from "react";

import { UnsplashApiPhoto } from "../../types/unsplash";
import { searchPhoto } from "../../api/unsplash";
import PhotoPanel from "../../components/photo-panel";

interface PhotoState {
  photos: Array<UnsplashApiPhoto>;
  page: number;
  isLoading: boolean;
}

interface Props {
  query: string;
}

const initialPhotoState = {
  photos: new Array<UnsplashApiPhoto>(),
  page: 1,
  isLoading: false
};

class SearchPhotoPanel extends React.PureComponent<Props, PhotoState> {
  state = initialPhotoState;

  componentDidUpdate(prevProps: Props) {
    if (prevProps.query !== this.props.query) {
      this.resetPhotos();
      this.loadImages();
    }
  }

  resetPhotos = () => {
    this.setState(initialPhotoState)
  }

  loadImages = async () => {
    if (this.state.isLoading) return;

    const { query } = this.props;

    this.setState(state => ({ ...state, isLoading: true }));

    const result = await searchPhoto({
      query,
      page: this.state.page
    });



    this.setState(state => ({
      page: state.page + 1,
      isLoading: false,
      photos: [...state.photos, ...result]
    }), () => {

    });
  };

  render = () => (
    <PhotoPanel
      hasScrolledToBottom={this.loadImages}
      photos={this.state.photos}
      isLoading={this.state.isLoading}
    />
  );
}

export default SearchPhotoPanel;

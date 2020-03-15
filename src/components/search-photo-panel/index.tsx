import React from "react";

import { UnsplashApiPhoto } from "../../types/unsplash";
import { searchPhoto } from "../../api/unsplash";
import PhotoPanel from "../../components/photo-panel";
import { pushNotification } from "../notifications";
import { MessageType } from "../notifications/types";
import Noresult from '../noresult'

interface PhotoState {
  photos: Array<UnsplashApiPhoto>;
  page: number;
  isLoading: boolean;
  noResults: boolean;
}

interface Props {
  query: string;
}

const initialPhotoState = {
  photos: new Array<UnsplashApiPhoto>(),
  page: 1,
  isLoading: false,
  noResults: false
};

class SearchPhotoPanel extends React.PureComponent<Props, PhotoState> {
  state = initialPhotoState;

  componentDidMount() {
    if (this.props.query) {
      this.resetPhotos();
      this.loadImages();
    }
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.query !== this.props.query) {
      this.resetPhotos();
      this.loadImages();
    }
  }

  resetPhotos = () => {
    this.setState(initialPhotoState);
  };

  loadImages = async () => {
    if (this.state.isLoading) return;

    const { query } = this.props;

    this.setState(state => ({ ...state, isLoading: true }));

    try {
      const result = await searchPhoto({
        query,
        page: this.state.page
      });

      let noResults = result.length === 0;

      this.setState(state => ({
        page: state.page + 1,
        isLoading: false,
        photos: [...state.photos, ...result],
        noResults
      }));
    } catch (e) {
      pushNotification(
        <>
          <p>{e.message}</p>
          <p>Maybe server is overloaded?</p>
        </>,
        MessageType.Error,
        5000
      );
      this.setState(() => ({
        isLoading: false,
        noResults: false
      }));
    }
  };

  render = () => (
    <PhotoPanel
      hasScrolledToBottom={this.loadImages}
      photos={this.state.photos}
      isLoading={this.state.isLoading}
      showNoResultsMessage={this.state.noResults ? <Noresult tip/> : null}
    />
  );
}

export default SearchPhotoPanel;

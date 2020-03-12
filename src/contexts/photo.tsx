import { createContext } from "react";
import React from "react";

const noop = () => {};

interface PhotoContextState {
  previousQueries: Array<string>;
}

interface PhotoContextProps extends PhotoContextState {
  addQuery: (query: string) => void;
}

const defaultState: PhotoContextState = {
  previousQueries: []
};

const defaultProps: PhotoContextProps = {
  ...defaultState,
  addQuery: noop
};

const PhotoContext = createContext<PhotoContextProps>(defaultProps);

class PhotoContextWrapper extends React.PureComponent {
  state: PhotoContextState = defaultState;

  addQuery = (query: string) => {
    const prevQueries = [...this.state.previousQueries];
    prevQueries.push(query);

    this.setState({ previousQueries: prevQueries });
  };

  get photoContextProps(): PhotoContextProps {
    return {
      ...this.state,
      addQuery: this.addQuery
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

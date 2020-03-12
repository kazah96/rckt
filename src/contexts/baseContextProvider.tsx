import React from "react";

import { PhotoContextWrapper } from "./photo";

const BaseContextProvider: React.FC = props => {
  return (
    <PhotoContextWrapper>
      {props.children}
    </PhotoContextWrapper>
  );
};

export { BaseContextProvider };

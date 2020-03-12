import React, { FC, useState, useEffect, useContext, useMemo } from "react";
import { generate } from "shortid";

//@ts-ignore
import throttle from "lodash/throttle";

import style from "./style.module.css";
import { PhotoContext } from "../../contexts/photo";

const search_throttle_interval = 500;

interface Props {}

const HorizontalWordScroll: FC<Props> = props => {
  const photoContext = useContext(PhotoContext);
  
  return useMemo(() => (
    <div className={style.container}>
      {photoContext.previousQueries.map(query => {
        return <div key={query} className={style.word}> {query}</div>;
      })}
    </div>
  ), [photoContext]);
};

export default HorizontalWordScroll;

import React, { FC, useState, useEffect, useContext, useMemo } from "react";
import { generate } from "shortid";

import style from "./style.module.css";
import { PhotoContext } from "../../contexts/photo";


interface Props {}

const HorizontalWordScroll: FC<Props> = props => {
  const photoContext = useContext(PhotoContext);
  
  return useMemo(() => (
    <div className={style.container}>
      {photoContext.previousQueries.map(query => {
        return <div key={generate()} className={style.word}> {query}</div>;
      })}
    </div>
  ), [photoContext]);
};

export default HorizontalWordScroll;

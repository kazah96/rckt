import React, { FC } from "react";

import style from "./style.module.css";

const Loader: FC = () => {
  return (
    <div className={style["lds-ellipsis"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;

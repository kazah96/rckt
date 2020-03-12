import React, { useState, FC } from "react";

import style from "./style.module.css";

const HeaderPanel: FC = props => {
  return <div className={style.panel}>{props.children}</div>;
};

export default HeaderPanel;

import React, { FC } from "react";
import cn from "classnames";
import style from "./style.module.css";

import useScrollDirection from "../../hooks/scroll-direction";

const HeaderPanel: FC = props => {
  const scroll = useScrollDirection();

  let show = true;


  if (scroll) {
    show = false
    if (scroll.direction === "UP" && scroll.hasReachedTop) show = true;
    if (scroll.direction === "DOWN") show = false;
  }

  return (
    <div className={cn(style.panel, { [style.hide]: !show })}>
      {props.children}
    </div>
  );
};

export default HeaderPanel;

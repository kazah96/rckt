import React from "react";
import cn from "classnames";
import style from "./style.module.css";

interface Props {
  isHorizontal?: boolean;
  className?: string;
}

const Masonry: React.FC<Props> = props => {
  return (
    <div
      className={cn(style.grid, props.className, {
        [style.gridHorizontal]: props.isHorizontal
      })}
    >
      {props.children}
    </div>
  );
};

export default Masonry;

import React, { FC, useState } from "react";
import style from "./style.module.css";
import FaceIcon from "../../resourse/svg/face.svg";

import cn from "classnames";

const Face: FC = () => {
  const [rotating, setRotating] = useState<boolean>(false);

  const rotate = (): void => {
    if (rotating) return;

    setRotating(true);
    setTimeout(() => {
      setRotating(false);
    }, 1000);
  };

  return (
    <FaceIcon
      onClick={rotate}
      className={cn(style.face, { [style.animate]: rotating })}
    />
  );
};

export default Face;

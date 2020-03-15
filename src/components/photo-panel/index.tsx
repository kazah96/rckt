import React, { FC, useState, ReactNode } from "react";
import cn from "classnames";

import HorizontalIcon from "../../resourse/svg/layout-horizontal.svg";
import GridIcon from "../../resourse/svg/layout-grid.svg";
import Masonry from "../masonry";

import style from "./style.module.css";
import { UnsplashApiPhoto } from "../../types/unsplash";

import Photo from "../photo";
import Loader from "../../atoms/loader";
import useScrollDirection from "../../hooks/scroll-direction";

interface IconProps {
  currentSelectedIcon: Layout;
  onClick: (selected: Layout) => void;
}

interface Props {
  photos: Array<UnsplashApiPhoto>;
  isLoading?: boolean;
  hasScrolledToBottom?: () => any;
  showNoResultsMessage?: string | ReactNode;
}

enum Layout {
  Grid,
  Horizontal
}

function bound(num: number, from: number, to: number): number {
  if (num < from) return from;
  if (num > to) return from;

  return num;
}

// Расчёт числа для grid-end-row: span {n}
// Магические числа выведены эмпирическим путём
function getSpan(width: number, height: number): number {
  const orig = Math.floor(Math.floor((height / width) * 100) / 5);
  const span = bound(orig, 15, 40);

  return span;
}

const LayoutIcons: FC<IconProps> = props => {
  return (
    <div className={style.layoutIcons}>
      <HorizontalIcon
        onClick={() => props.onClick(Layout.Horizontal)}
        className={cn(style.layoutIcon, {
          [style.active]: props.currentSelectedIcon === Layout.Horizontal
        })}
      />
      <GridIcon
        onClick={() => props.onClick(Layout.Grid)}
        className={cn(style.layoutIcon, {
          [style.active]: props.currentSelectedIcon === Layout.Grid
        })}
      />
    </div>
  );
};

const PhotoPanel: FC<Props> = props => {
  const [layout, setLayout] = useState<Layout>(Layout.Grid);

  const scroll = useScrollDirection();
  if (scroll?.hasReachedBottom) props.hasScrolledToBottom();

  return (
    <div className={style.panel}>
      <LayoutIcons currentSelectedIcon={layout} onClick={setLayout} />
      {props.photos.length > 0 ? (
        <Masonry
          className={style.grid}
          isHorizontal={layout === Layout.Horizontal}
        >
          {props.photos.map(photo => {
            return (
              <Photo
                span={getSpan(photo.width, photo.height)}
                key={photo.id}
                photo={photo}
              />
            );
          })}
        </Masonry>
      ) : (
        props.showNoResultsMessage && (
          <div className={style.nophoto}>{props.showNoResultsMessage}</div>
        )
      )}
      {props.isLoading && <Loader />}
    </div>
  );
};

export default PhotoPanel;

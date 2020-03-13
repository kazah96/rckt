import React, { FC, useState } from "react";
import cn from "classnames";
import generate from 'shortid'

import HorizontalIcon from "../../resourse/svg/layout-horizontal.svg";
import GridIcon from "../../resourse/svg/layout-grid.svg";

import style from "./style.module.css";
import { UnsplashApiPhoto } from "../../types/unsplash";

import Photo from '../photo'

interface IconProps {
  currentSelectedIcon: Layout;
  onClick: (selected: Layout) => void;
}

interface Props {
  photos: Array<UnsplashApiPhoto>;
}

enum Layout {
  Grid,
  Horizontal
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

  const layoutClassname = cn(style.layout,{
    [style.layout_horizontal]: layout === Layout.Horizontal,
    [style.layout_grid]: layout === Layout.Grid
  });
  return (
    <div className={style.panel}>
      <LayoutIcons currentSelectedIcon={layout} onClick={setLayout} />

      <div className={layoutClassname}>
        {props.photos.map(photo => {
          return (
            <Photo key={generate()} photo={photo} />
          );
        })}
      </div>
    </div>
  );
};

export default PhotoPanel;

import React, { FC, useState } from "react";
import cn from "classnames";
import generate from "shortid";

import HorizontalIcon from "../../resourse/svg/layout-horizontal.svg";
import GridIcon from "../../resourse/svg/layout-grid.svg";
import Masonry from "react-masonry-component";

import style from "./style.module.css";
import { UnsplashApiPhoto } from "../../types/unsplash";

import Photo from "../photo";
import Loader from '../../atoms/loader';

interface IconProps {
  currentSelectedIcon: Layout;
  onClick: (selected: Layout) => void;
}

interface Props {
  photos: Array<UnsplashApiPhoto>;
  isLoading?: boolean;
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

  const layoutClassname = cn(style.layout, {
    [style.layout_horizontal]: layout === Layout.Horizontal,
    [style.layout_grid]: layout === Layout.Grid
  });

  return (
    <div className={style.panel} >
      <LayoutIcons currentSelectedIcon={layout} onClick={setLayout} />
      <div className={layoutClassname}>
        <Masonry>
          {props.photos.map(photo => {
            return <Photo key={generate()} width={ layout === Layout.Grid ? '479px' : '100%'} photo={photo} />;
          })}
        </Masonry>
      </div>
      {props.isLoading && <Loader />}
    </div>
  );
};

export default PhotoPanel;

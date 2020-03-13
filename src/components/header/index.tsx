import React, { FC } from "react";
import Link from "next/link";
import cn from "classnames";

import SearchIcon from "../../resourse/svg/search.svg";
import LikeIcon from "../../resourse/svg/like.svg";
import HistoryIcon from "../../resourse/svg/history.svg";
import Face from "./face";

import style from "./style.module.css";
import useScrollDirection from "../../hooks/scroll-direction";

const Header: FC = () => {
  const sticky = useScrollDirection();

  return (
    <div className={cn(style.header, { [style.headerSticky]: sticky })}>
      <div className={style.faceContainer}>
        <Face />
      </div>
      <div className={style.rightBar}>
        <Link href="/search">
          <a className={style.link}>
            <SearchIcon />
            <span>Поиск</span>
          </a>
        </Link>
        <Link href="/favorites">
          <a className={style.link}>
            <LikeIcon />
            <span>Избранное</span>
          </a>
        </Link>
        <Link href="/search-history">
          <a className={style.link}>
            <HistoryIcon />
            <span>История поиска</span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Header;

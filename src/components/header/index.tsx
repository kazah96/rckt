import React, { FC } from "react";
import Link from "../active-link";
import cn from "classnames";

import SearchIcon from "../../resourse/svg/search.svg";
import LikeIcon from "../../resourse/svg/like.svg";
import HistoryIcon from "../../resourse/svg/history.svg";
import Face from "./face";

import style from "./style.module.css";

const Header: FC = () => {
  return (
    <div className={cn(style.header)}>
      <div className={style.faceContainer}>
        <Face />
      </div>
      <div className={style.rightBar}>
        <Link activeClassName={style.activeLink} href="/search">
          <a className={style.link}>
            <SearchIcon />
            <span>Поиск</span>
          </a>
        </Link>
        <Link activeClassName={style.activeLink} href="/favorites">
          <a className={style.link}>
            <LikeIcon />
            <span>Избранное</span>
          </a>
        </Link>
        <Link activeClassName={style.activeLink} href="/search-history">
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

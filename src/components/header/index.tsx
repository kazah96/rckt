import React, { FC } from "react";
import Link from "next/link";

import SearchIcon from "../../resourse/svg/search.svg";
import LikeIcon from "../../resourse/svg/like.svg";
import HistoryIcon from "../../resourse/svg/history.svg";

import style from "./style.module.css";

interface Props {}

const Header: FC<Props> = props => {

  return (
    <div className={style.header}>
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

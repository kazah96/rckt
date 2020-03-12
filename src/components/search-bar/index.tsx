import React, { FC, useState, useEffect, useContext, useCallback } from "react";

//@ts-ignore
import throttle from "lodash/throttle";

import style from "./style.module.css";
import { PhotoContext } from "../../contexts/photo";

const search_throttle_interval = 500;

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar: FC<Props> = props => {
  const [value, setValue] = useState<string>("");
  const photoContext = useContext(PhotoContext);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleUserKeyPress = useCallback(
    throttle((e: KeyboardEvent) => {
      if (e.key === "Enter" && value !== "") {
        props.onSearch(value);
        photoContext.addQuery(value);

        setValue("");
      }
    }, search_throttle_interval),
    [value]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleUserKeyPress);

    return () => {
      document.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [value]);

  return (
    <div className={style.div}>
      <input
        className={style.input}
        placeholder="Поиск"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;

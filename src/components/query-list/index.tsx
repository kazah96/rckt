import React, { FC, useContext } from "react";
import { PhotoContext } from "../../contexts/photo";

import WordList from "../../atoms/word-list";

interface Props {
  onWordClick?: (word: string) => void;
}

const QueryList: FC<Props> = ({ onWordClick }) => {
  const context = useContext(PhotoContext);
  return <WordList words={context.previousQueries} onWordClick={onWordClick} />;
};

export default QueryList;

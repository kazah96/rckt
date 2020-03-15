import React from "react";
import { generate } from "shortid";

import style from "./style.module.css";
import { PhotoContext } from "../../contexts/photo";

interface Props {
  words: Array<string>;
  onWordClick?: (word: string) => void;
}

class HorizontalWordScroll extends React.Component<Props> {
  state = {
    offset: 0
  };

  static contextType = PhotoContext;

  render() {
    const { words, onWordClick } = this.props;
    
    return (
      <div
        className={style.container}
        style={{ left: `${this.state.offset}px` }}
      >
        <div>
          {words.map(query => {
            return (
              <span key={generate()} onClick={() => onWordClick(query)} className={style.word}>
                {query}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default HorizontalWordScroll;

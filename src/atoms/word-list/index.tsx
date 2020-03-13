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

  containerRef: HTMLDivElement;
  refList: Array<HTMLDivElement> = [];

  static contextType = PhotoContext;

  onScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const delta = event.deltaY * 2;

    const cont = this.containerRef;

    const center = cont.clientWidth / 2;

    let offset = this.state.offset + delta;

    if (
      cont.offsetLeft + delta <= center &&
      cont.offsetLeft + cont.clientWidth + delta >= center
    ) {
      this.setState({ offset });
    }
  };

  render() {
    const { words, onWordClick } = this.props;
    
    return (
      <div
        ref={r => (this.containerRef = r)}
        onWheel={this.onScroll}
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

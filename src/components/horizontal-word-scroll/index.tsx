import React, { FC, useState, useEffect, useContext, useMemo } from "react";
import { generate } from "shortid";

import style from "./style.module.css";
import { PhotoContext } from "../../contexts/photo";
import { render } from "@testing-library/react";

interface Props {}

const defaultNames = [
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",
  "name",

  "name"
].map((item, i) => item + i);

class HorizontalWordScroll extends React.Component<Props> {
  state = {
    offset: 0
  };

  containerRef: HTMLDivElement;
  refList: Array<HTMLDivElement> = [];

  static contextType = PhotoContext 

  onScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    const delta = event.deltaY * 20;
    const center = this.containerRef.clientWidth/2;

    let offset = this.state.offset + delta;
    if (this.refList.length === 0) return;

    const first = this.refList[0];
    const last = this.refList[this.refList.length - 1];

    if (
      first.offsetLeft + delta <= center &&
      last.offsetLeft + last.clientWidth + delta >= center
    ) {
      console.log(first.offsetLeft, last.offsetLeft, window.screen.width);

      this.setState({ offset });
    }
  };

  render() {
    const photoContext = this.context;
    return (
      <div
        ref={r => (this.containerRef = r)}
        onWheel={this.onScroll}
        className={style.container}
      >
        {photoContext.previousQueries.map((query, i) => {
          return (
            <div
              ref={r => (this.refList[i] = r)}
              key={generate()}
              className={style.word}
              style={{ left: `${this.state.offset}px` }}
            >
              {query}
            </div>
          );
        })}
        <div className={style.shadowOverlay}></div>
      </div>
    );
  }
}

export default HorizontalWordScroll;

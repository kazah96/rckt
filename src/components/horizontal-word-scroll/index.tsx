// @ts-nocheck
// eslint-ignore 

import React from "react";
import { generate } from "shortid";

import style from "./style.module.css";
import { PhotoContext } from "../../contexts/photo";

interface Props {
  onWordClick?: (word: string) => void;
}

// function ease(currentValue: number, min, max) {

//   return 1/Math.pow(currentValue, 2);
// }

// const maxSpeed = 10;

// function bound(number, max, min) {
//   if (number > max) return max;
//   if (number < min) return min;
// }

class Smooth {
  currentPosition = 0;
  currentSpeed = 0;
  start = null;
  direction = 1;

  public callback: (currentNumber: number) => any;


  addMove = (force: number) => {
    if (this.currentSpeed === 0) {
      this.currentSpeed = Math.abs(force);
      this.direction = force > 0 ? 1 : -1;

      window.requestAnimationFrame(this.animate);

      return;
    }

    this.currentSpeed += force

    // this.currentSpeed = bound(this.currentSpeed + force, maxSpeed, 0);
  };

  animate = timestamp => {
    if (this.currentSpeed <= 0) {
      this.currentSpeed = 0;

      return;
    }

    if (!this.start) this.start = timestamp;

    this.currentSpeed -= 0.1;

    if (this.currentSpeed < 0) {
      this.currentSpeed = 0;
    }

    this.currentPosition += this.currentSpeed * this.direction;
    this.callback(this.currentPosition);

    window.requestAnimationFrame(this.animate);
  };
}

class HorizontalWordScroll extends React.Component<Props> {
  state = {
    offset: 0
  };

  smoothScroll: Smooth;

  containerRef: HTMLDivElement;
  refList: Array<HTMLDivElement> = [];

  static contextType = PhotoContext;

  componentDidMount() {
    this.smoothScroll = new Smooth();

    this.smoothScroll.callback = offset => {
      this.setState({ offset });
    };
  }

  onScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const delta = event.deltaY*2;

    this.smoothScroll.addMove(delta);

    // const center = this.containerRef.clientWidth / 2;

    // let offset = this.state.offset + delta;
    // if (this.refList.length === 0) return;

    // const first = this.refList[0];
    // const last = this.refList[this.refList.length - 1];

    // if (
    //   first.offsetLeft + delta <= center &&
    //   last.offsetLeft + last.clientWidth + delta >= center
    // ) {
    //   console.log(first.offsetLeft, last.offsetLeft, window.screen.width);

    //   this.setState({ offset });
    // }
  };

  render() {
    const photoContext = this.context;
    const { onWordClick } = this.props;

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
              onClick={() => onWordClick(query)}
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

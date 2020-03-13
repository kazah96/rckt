import { useState, useEffect } from "react";

interface Scroll {
  direction: "UP" | "DOWN";
  hasReachedTop: boolean;
  hasReachedBottom: boolean;
}

function useScrollDirection() {
  const [hide, setHide] = useState<Scroll>();

  useEffect(() => {
    let scrollPos = 0;

    const onScroll = () => {
      const result: Scroll = {
        hasReachedBottom: false,
        hasReachedTop: false,
        direction: "DOWN"
      };

      if (
        document.documentElement.scrollTop === 0
      ) {
        result.hasReachedTop = true;
      }

      const d = document.documentElement;
      const offset = d.scrollTop + window.innerHeight;
      const height = d.offsetHeight;

      if (offset >= height) {
        result.hasReachedBottom = true;
      }

      if (document.body.getBoundingClientRect().top > scrollPos) {
        result.direction = "UP";
      } else {
        result.direction = "DOWN";
      }

      scrollPos = document.body.getBoundingClientRect().top;
      setHide(result);

    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return hide;
}

export default useScrollDirection;

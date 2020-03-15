import React, { FC } from "react";
import getRandWord from "../../utils/randWord";
import Link from "next/link";

import dynamic from "next/dynamic";

interface Props {
  tip?: boolean;
}

const NoResult: FC<Props> = ({ tip }) => {
  const word = getRandWord();

  return (
    <>
      <h2>No results :(</h2>
      {tip && (
        <h2>
          Maybe try{" "}
          <Link href={`/search?q=${word}`}>
            <a>{word}</a>
          </Link>
          ?
        </h2>
      )}
    </>
  );
};

// disabling SSR due to random content
export default dynamic(() => Promise.resolve(NoResult), {
  ssr: false
});

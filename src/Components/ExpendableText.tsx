import React, { Children, ReactNode, useState } from "react";

interface Props {
  children: string;
  contentLength?: number;
}

const ExpendableText = ({ children, contentLength = 100 }: Props) => {
  const [length, setLength] = useState(false);

  if (children.length <= contentLength) {
    return <p>{children}..</p>;
  }

  const text = length ? children : children.substring(0, contentLength);
  return (
    <p>
      {text}...
      <button onClick={() => setLength(!length)}>
        {length ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpendableText;

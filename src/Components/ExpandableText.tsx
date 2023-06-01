import React, { useState } from "react";

interface Props {
  children: string;
  maxLength?: number;
}

const ExpandableText = ({ children, maxLength = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxLength) {
    return <p>{children}</p>;
  }

  const text = isExpanded ? children : children.substring(0, maxLength);
  return (
    <div>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableText;

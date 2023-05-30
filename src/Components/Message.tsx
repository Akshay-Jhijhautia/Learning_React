import React from "react";

const Message = () => {
  const name = "";
  if (name)
    return (
      <>
        <h1>Hello {name}</h1>
        <div>Welcome to the react course</div>
      </>
    );

  return <h1>Hello World</h1>;
};

export default Message;

function Message() {
  const name = "a";
  if (name) {
    return <span>Hello {name}</span>;
  }
  return <span>Hello World</span>;
}

export default Message;

const ListGroup = () => {
  let items = ["New York", "San Francisco", "Tokyo", "London", "paris"];
  //items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items allowed</p>}
      {items.map((item) => {
        return <li key={item}>{item}</li>;
      })}
    </>
  );
};

export default ListGroup;

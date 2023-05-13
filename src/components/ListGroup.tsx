// Here list group is a component
// code written below in function is a JSX
// In jsx we cannot user a for loop or a if statement, but with {} we can render anything dynamically
// In jsx we can only use html or other react components
// we are using map to render data dynamically
// In order for map to work in jsx, we wrap it in braces {}
// Each list item in JSX should have a key property that uniquely identifies
// that item, react needs this to keep track of our items, so later when we add
// or remove items dynamically, react knows what part of page should be updated
// line 18 is used to render elements dynamically

function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className=" list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

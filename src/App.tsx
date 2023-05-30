import Message from "./Components/Message";
import ListGroup from "./Components/ListGroup";

function App() {
  let colors = ["red", "blue", "green", "brown", "yellow"];
  let heading = "Colors";

  const handleSelected = (items: string) => console.log(items);
  return (
    <span>
      <ListGroup
        items={colors}
        heading={heading}
        selectedItem={handleSelected}
      />
    </span>
  );
}

export default App;

import Message from "./Components/Message";
import ListGroup from "./Components/ListGroup";

function App() {
  let colors = ["red", "blue", "green", "brown", "yellow"];
  let heading = "Colors";

  return (
    <span>
      <ListGroup items={colors} heading={heading} />
    </span>
  );
}

export default App;

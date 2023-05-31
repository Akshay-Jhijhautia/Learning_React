import Message from "./Components/Message";
import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";

// function App() {
//   let colors = ["red", "blue", "green", "brown", "yellow"];
//   let heading = "Colors";

//   const handleSelected = (items: string) => console.log(items);
//   return (
//     <span>
//       <ListGroup
//         items={colors}
//         heading={heading}
//         selectedItem={handleSelected}
//       />
//     </span>
//   );
// }

function App() {
  return (
    <div>
      <Button handleClick={() => console.log("Clicked")} color="secondary">
        My button
      </Button>
    </div>
  );
}

export default App;

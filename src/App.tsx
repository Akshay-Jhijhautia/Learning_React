import Message from "./Components/Message";
import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";

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
  const [alert, setAlert] = useState(false);

  const handleClick = () => setAlert(true);
  const handleAlert = () => setAlert(false);

  return (
    <div>
      {alert && <Alert onClick={handleAlert}>Alert</Alert>}
      <Button onClick={handleClick}>My button</Button>
    </div>
  );
}

export default App;

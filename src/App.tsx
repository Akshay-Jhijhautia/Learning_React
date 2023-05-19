import Message from "./Components/Message";
import ListGroup from "./Components/ListGroup/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";
import Like from "./Components/Like";

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "paris"];

//   const handleSelectItem = (items: string) => {
//     console.log(items);
//   };

//   return (
//     <div>
//       <ListGroup
//         cities={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello <p>World</p>
//       </Alert>
//     </div>
//   );
// }

// function App() {
//   const [alert, setAlert] = useState(false);
//   return (
//     <div>
//       {alert && <Alert onClose={() => setAlert(false)}>My Alert</Alert>}
//       <Button color="success" click={() => setAlert(true)}>
//         My Button
//       </Button>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Like handleClick={() => console.log("Clicked")}></Like>
    </div>
  );
}

export default App;

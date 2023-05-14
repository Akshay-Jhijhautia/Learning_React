import Message from "./Message";
import ListGroup from "./components/ListGroup/ListGroup";

import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Buttons";
import Like from "./components/Like";

// function App() {
//   const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
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
//         Hello <span>World</span>
//       </Alert>
//     </div>
//   );
// }

// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
//       )}
//       <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
}
export default App;

import Message from "./Components/Message";
import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import Like from "./Components/Like";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";

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

// function App() {
//   const [alert, setAlert] = useState(false);

//   const handleClick = () => setAlert(true);
//   const handleAlert = () => setAlert(false);

//   return (
//     <div>
//       {alert && <Alert onClose={handleAlert}>Alert</Alert>}
//       <Button onClick={handleClick}>My button</Button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <Like handleClick={() => console.log("clicked")}></Like>
//     </div>
//   );
// }

// function App() {
//   const [drink, setDrink] = useState({
//     title: "Americano",
//     price: 5,
//   });

//   const handleClick = () => {
//     setDrink({ ...drink, title: "Not Americano", price: drink.price + 1 });
//   };

//   return (
//     <div>
//       {drink.title} {drink.price}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// function App() {
//   const [customer, setCustomer] = useState({
//     name: "John",
//     address: {
//       city: "Hyderabad",
//       zipcode: 123456,
//     },
//   });

//   const handleClick = () => {
//     setCustomer({
//       ...customer,
//       name: "Amar",
//       address: {
//         ...customer.address,
//         city: "Bangalore",
//         zipcode: 2349987,
//       },
//     });
//   };
//   return (
//     <div>
//       {customer.name} {customer.address.city} {customer.address.zipcode}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// function App() {
//   const [tags, setTags] = useState(["happy", "cheerfull"]);

//   const handleClick = () => {
//     setTags([...tags, "exciting"]);
//     setTags(tags.filter((item) => item != "cheerfull"));
//     setTags(tags.map((item) => (item === "happy" ? "happiness" : item)));
//   };

//   return (
//     <div>
//       {tags}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "bug 1", fixed: false },
//     { id: 2, title: "bug 2", fixed: false },
//   ]);

//   const handleClick = () => {
//     setBugs(
//       bugs.map((bug) => (bug.id === 1 ? { ...bug, title: "Bug Fixed" } : bug))
//     );
//   };
//   return (
//     <div>
//       {bugs[0].title}
//       <button onClick={handleClick}>Click me</button>
//     </div>
//   );
// }

function App() {
  const [products, setProducts] = useState(["Product 1", "Product 2"]);

  return (
    <div>
      <Navbar noOfCartItems={products.length} />
      <Cart cartItems={products} clearCart={() => setProducts([])} />
    </div>
  );
}

export default App;

import Message from "./Components/Message";
import ListGroup from "./Components/ListGroup/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import { useState } from "react";
import Like from "./Components/Like";
import Navbar from "./Components/Navbar";
import CartItems from "./Components/CartItems";
import ExpendableText from "./Components/ExpendableText";
import Form from "./Components/Form";

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

// function App() {
//   return (
//     <div>
//       <Like handleClick={() => console.log("Clicked")}></Like>
//     </div>
//   );
// }

// function App() {
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       { id: 1, title: "Product 1", quantity: 1 },
//       { id: 2, title: "Product 2", quantity: 1 },
//     ],
//   });

//   const handleClick = () => {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 1 ? { ...item, quantity: item.quantity + 4 } : item
//       ),
//     });
//   };

//   return (
//     <div>
//       {cart.items[0].quantity}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// function App() {
//   const [cart, setCart] = useState(["Product 1", "Product 2"]);

//   return (
//     <div>
//       <Navbar numberOfItems={cart.length}></Navbar>
//       <CartItems items={cart}></CartItems>
//       <button onClick={() => setCart([])}>Click</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <ExpendableText>
//         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo inventore
//         alias cum provident et, quasi expedita ex dicta porro id voluptatibus!
//         Pariatur expedita, aut voluptas, et natus assumenda blanditiis obcaecati
//         molestias praesentium tenetur nam non laudantium ab aliquam! Tempore
//         ipsa dolorum numquam dolores perspiciatis ab ad, fugit minus debitis hic
//         inventore. Sit, nam exercitationem! Ratione necessitatibus mollitia
//         laudantium incidunt nesciunt in provident, hic facere alias, quod nobis
//         ducimus quasi exercitationem praesentium explicabo ad doloribus eaque,
//         unde autem! Doloribus officiis fuga, molestias incidunt saepe quisquam
//         tempora inventore! Cumque nesciunt saepe architecto? Assumenda
//         consectetur aspernatur possimus. Sapiente dolor nobis provident illum
//         similique!
//       </ExpendableText>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Form></Form>
    </div>
  );
}

export default App;

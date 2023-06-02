import Message from "./Components/Message";
import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import Like from "./Components/Like";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import ExpandableText from "./Components/ExpandableText";
import Form from "./Components/Form";
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

// function App() {
//   const [products, setProducts] = useState(["Product 1", "Product 2"]);

//   return (
//     <div>
//       <Navbar noOfCartItems={products.length} />
//       <Cart cartItems={products} clearCart={() => setProducts([])} />
//     </div>
//   );
// }

// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "John",
//     },
//   });

//   const handleClick = () => {
//     setGame({ ...game, id: 2, player: { ...game.player, name: "Indraneel" } });
//   };

//   return (
//     <div>
//       {game.id} {game.player.name}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// function App() {
//   const [pizza, setPizza] = useState({
//     name: "Spicy Pepperoni",
//     toppings: ["Mushroom"],
//   });

//   const handleClick = () => {
//     setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
//   };
//   return (
//     <div>
//       {pizza.name} {pizza.toppings}{" "}
//       <button onClick={handleClick}>Click Me</button>
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
//         item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
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
//   return (
//     <div>
//       <ExpandableText maxLength={100}>
//         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto cum
//         tempora exercitationem amet cumque veritatis atque, laborum natus
//         aperiam quo quisquam consequuntur illum nobis labore nostrum, itaque,
//         alias possimus est nesciunt deleniti. Facilis veritatis magni, itaque
//         ullam omnis provident obcaecati quas numquam eligendi incidunt aliquam
//         repellendus eum in odit adipisci corporis magnam inventore blanditiis
//         debitis nihil, quod soluta vero optio. Dolorem quam perferendis placeat?
//         Consequatur eius officiis aliquam molestias, molestiae, qui iste aliquid
//         recusandae iusto eveniet dignissimos odit ratione atque itaque veniam
//         non ipsam est vel repellendus fugiat. Numquam vel omnis adipisci
//         distinctio porro non atque tempore quis aperiam accusantium!...
//       </ExpandableText>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;

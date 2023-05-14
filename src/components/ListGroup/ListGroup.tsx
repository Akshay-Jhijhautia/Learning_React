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
// {} => it is used to render content dynamically

import { useState } from "react";
import "./ListGroup.css";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  /* function onSelectItem will inform the components parent(App in this case), that 
  item is selected, it returns void */
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // items, heading and onSelectItem are props i.e immutable(they cannot be changed)
  /* This function handleClick is called event handler, because its job 
   is to handle a event, which in this case is click.*/

  // selectedIndex = 0(First item is selected), =-1(No item is selected)
  // useState is a hook, using this, we can tell react that, this component can have data or state,
  // that will change overtime. useState returns a array. This array has two elements a[0] and a[1].
  // State is mutable
  /*a[0]: variable (selectedIndex)
  a[1]:  updater function, this updated the a[0] variable, and react will be notified that state of 
  our component has changed, and then react will re-render that component, it causes DOM to updated under the hood.
  Each component has its own state, even if we render ListGroup twice, both components will have their own state*/

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className=" list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index); // give updater function a new index
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// In react each element has a property or prop called "onClick".

/* "event" in arrow function is called as a browser event, type of this event is an object, it is called as 
SyntheticBaseEvent, this is a in built is class in react,because different browsers have different implementation of
of event object, so to make is cross browser, react has a class. This class is wrapper around native browser event object.
*/

/*Props or properties are input to our components */
/* Interface- A typeScript property, that helps us define a shape or interface 
of an object*/

/* Hook is a function that allows us to tap into, built-in features of react*/

//

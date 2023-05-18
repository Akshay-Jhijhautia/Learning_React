1. `Typescript` -> It is a superset of javascript, that adds static typing to the language, in other words, it helps us to catch error earlier in the development process.

# Points-

When HTMl is loaded in the browser, the browser takes the html code, and creates a tree like structure called as Document object model. This allows us to use javascript, and change the page content, in response to user actions. This is called vanilla javascript. As our application grows, it becomes hard to manage a complex DOM.
In React we do not have to worry on creating and updating DOM elements, instead we describe the web page in small, reusable components and react takes care of efficiently creating and updating DOM elements. Components help us to write, reusable and better organized code. ex. navbar, etc. We build all the components individually and combine them to build a page. Essentially a react application is a tree of components with App as the root bringing everything together.

3. `Public folder` -> public assets of our websites exists, like images, media files etc.

4. .ts is used for normal typesctipt files, and tsx is used for react components

5. `Pascal casing` - capitalize first letter of every word. In react follow pascal casing to create a component.

6. `Component tree` - App is root or top level component and let say message being a child. When our application starts, react takes our component tree and builds javascript data structure called virtual DOM. Virtual DOM is different from the actual DOM, it is light weight in memory representation of our component tree, where each node represents a component and its properties. When state of data of a component changes, react updates a corresponding node in the virtual DOM to reflect a new state. Then it compares current version of DOM to the previous version to identify the nodes that should be updated. It will update those nodes in the actual DOM. This is done by react-DOM.

7. A library is a tool that provides specific functionality whereas a framwrok provides a set of tools and guidelines fo building applications.

8. In react one component cannot return more than one element, so if we want to return 2 elements, then we shoud wrap both those elements in single element ex like div. But instead of adding an extra element we should use react fragments. Now when the component is rendered on the screen, we will not have a additional element like a div in the DOM. OR we can just use the empty brackets to tell react to use a fragment here

9. Props or properties are input passed to a component, State is internal data managed by component that can change overtime.

10. Props are similar to function arguments whereas state is similar to local variable.

11. Props are immutable(cannot be changed), state is mutable.

12. React icons are basically react-components, try to use it as a react component.

# Few points about state hook

- React updates state asynchronously, i.e not immediately,for performance reason
- State is stored outside of components(including app component)
- We can only use hooks at the top level of your component.
- Group related variables inside an object.
- Avoid deeply nested structures, when using state hook.

* We should treat state objects as immutable only.
* Sometimes, we need to share state between components.
* Component that hold the state, is responsible for updating it.

**Pure Function** - Given the same input, always returns the same result.

ex. const result = myFunc(1); -> this function gives same result everytime it is invoked.
React is designed around this concept, it expects every component to be a pure function. Then it does have to re-render the component every time. To keep components pure we should keep the changes out of render phase, we should not change any object that existed before rendering.

# Effect hook:

- It is used to execute a piece of code, after a component is rendered
- Should be called at the top, and can be used multiple times.
- When there are multiple effect hooks, react runs effect hook in order, after each render.

# Points

- In react each element has a property or prop called "onClick".
- "event" in arrow function is called as a browser event, type of this event is an object, it is called as SyntheticBaseEvent, this is a in built class in react,because different browsers have different implementation of event object, so to make is cross browser, react has a class. This class is wrapper around native browser event object.
- Props or properties are input to our components
- Interface- A typeScript property, that helps us define a shape or interface of an object
- Hook is a function that allows us to tap into, built-in features of react

* this syntax "<h1>Hello World</h1>" is known as JSX or javascript XML inside a function component return statement, this code under the hood will get compiled to javascript code to react.create element with type of element as h1 and message as hello world.
* With jsx we can easily describe the user interface of our application with html and javascript. JSX allows us to easily create dynamic content, ex here in '{}' we can write any javascript expression

- In components, what we write i.e return is called jsx, in jsx we cannot user a for loop or a if statement, but with {} we can render anything dynamically.
- In jsx we can only use html or other react components we are using map to render data dynamically, in order for map to work in jsx, we wrap it in braces {}.
- Each list item in JSX should have a key property that uniquely identifies that item, react needs this to keep track of our items, so later when we add
  or remove items dynamically, react knows what part of page should be updated
- {} => it is used to render content dynamically.
- Parameters passed in the component's function are called as props, i.e immutable(they cannot be changed). ex In list group we passed (items, heading, onSelectItem)
- The function handleClick is called event handler, because its job is to handle a event, which in this case is click.

* UseState is a hook, using this, we can tell react that, this component can have data or state, that will change overtime. useState returns a array. This array has two elements a[0] and a[1]
* State is mutable
* a[0]: variable (selectedIndex), a[1]: updater function, this updated the a[0] variable, and react will be notified that state of our component has changed, and then react will re-render that component, it causes DOM to updated under the hood.Each component has its own state, even if we render ListGroup twice, both components will have their own state.

* React Node is a class defined in react module, with the help of which we can pass complex html or simple string as child to a component. Using children prop, we can pass children to a component.
* useForm is a custom hook, it returns a object
* If you only need to export a single value from a module, or if the module represents a main feature of your application, use export default. If you need to export multiple values from a module, or if you want to organize your code into smaller, reusable components, use export with named exports.

**In main.tsx**:

- Here we are using ReactDOM to render the component tree, inside an element with id of root. Here in the tree, App component is wrapped by other component react.StrictMode(its purpose is to identify potential prblems). So we are taking this component tree and rendering or displaying it inside and element with id of root, and to do that we are using react dom library.

- Due to app component wrapped in strict mode, react renders each component twice. The first render is used for detecting issues with out code, and second render is used to update the user interface. This is only for development phase, not for production phase.

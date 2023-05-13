1. `Typescript` -> It is a superset of javascript, that adds static typing to the language, in other words, it helps us to catch error earlier in the development process.

2. `React` -> It is a javascript library.

# Points-

When HTMl is loaded in the browser, the browser takes the html code, and creates a tree like structure called as Document object model. This allows us to use javascript, and change the page content, in response to user actions. This is called vanilla javascript. As our application grows, it becomes hard to manage a complex DOM.
In React we do not have to worry on creating and updating DOM elements, instead we describe the web page in small, reusable components and react takes care of efficiently creating and updating DOM elements. Components help us to write, reusable and better organized code. ex. navbar, etc. We build all the components individually and combine them to build a page. Essentially a react application is a tree of components with App as the root bringing everything together.

3. `Public folder` -> public assets of our websites exists, like images, media files etc.

4. .ts is used for normal typesctipt files, and tsx is used for react components

5. Two ways of creating a React component
6. Javascript classes
7. Javascript function
   Function based components have become more powerfull, as they are more concise and easier to write.

8. `Pascal casing` - capitalize first letter of every word
   In react follow pascal casing to create a component.

9. `Component tree` - App is root or top level component and let say message being a child. When our application starts, react takes our component tree and builds javascript data structure called virtual DOM. Virtual DOM is different from the actual DOM, it is light weight in memory representation of our component tree, where each node represents a componet and its properties. When state of data of a component changes, react updates a corresponding node in the virtual DOM to reflect a new state. Then it compares current version of DOM to the previous version to identify the nodes that should be updated. It will update those nodes in the actual DOM. This is done by react-DOM.

10. A library is a tool that provides specific functionality whereas a framwrok provides a set of tools and guidelines fo building applications.

11. In react one component cannot return more than one element, so if we want to return 2 elements, then we shoud wrap both those elements in single element ex like div. But instead of adding an extra element we should use react fragments. Now when the component is rendered on the screen, we will not have a additional element like a div in the DOM. OR we can just use the empty brackets to tell react to use a fragment here

12. Props or properties are input passed to a component, State is internal data managed by component that can change overtime.

13. Props are similar to function arguments whereas state is similar to local variable

14. Props are immutable(cannot be changed), state is mutable

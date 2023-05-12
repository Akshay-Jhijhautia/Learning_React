// here Message is a component;
function Message() {
    
    const name = "";
    if(name){
        return <h1>Hello {name}</h1>;
    } else {
        return <h1>Hello World</h1>
    }

    /*this syntax "<h1>Hello World</h1>" is known as JSX or javascript XML
      this code under the hood will get compiled to javascript code to react.create element with
      type of element as h1 and message as hello world*/
}


export default Message;

// export it as a default object from this module

/* If you only need to export a single value from a module, or if the module represents a main feature of your application, use export default . 
If you need to export multiple values from a module, or if you want to organize your code into smaller, reusable components, use export with named exports.*/

/* With jsx we can easily describe the user interface of our 
application with html and javascript. JSX allows us to easily create
dynamic content, ex here in '{}' we can write any javascript expression*/
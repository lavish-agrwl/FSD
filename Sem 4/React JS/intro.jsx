// React is JS library created by Facebook
// Most popular JS library for creating UI
// Also used by Netflix & Instagram
// Used to create Single Page Application(SPA)
// We can build modern , fast SPA or websites with React

// LIbrary :- A library in programming can be explained as a collection of codes.  We use a library to write codes in much simpler way or to import a feature from it into our project. JQuery is a library for example. We can write JS much simpler by using JQuery, or we can import written JQuery features to our project. The project itself is not dependent on a library.

// Framework :- A framework is a complete package of code with its own functionalities and libraries. A frameowrk has its own riles, you dont have much flexibility and project is dependent on the  framework you use. Angular is an example of framework.

// The extension is .jsx (JS+XML) and is neither purely html nor js. It creates a virtual DOM(Document Object Model). Each time you make a change in code DOM will completely updated and rewritten. This is expensive operation and consumes lots of time. In this point React provieds a solution : Virtual DOM. So when something changes:
// 1. React creates copy of DOM
// 2. Figures out which part has been change in DOM
// 3. Finally, React copies only new parts of virtual DOM to actual DOM rather than completely rewritting it.

// const element = <h1>Hello</h1>;

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.toWhat}</div>;
  }
}
ReactDOM.render(<Hello toWhat="World" />, document.getElementById("root"));

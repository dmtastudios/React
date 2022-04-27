// REACT BASICS

// EXAMPLE OF A CLASS COMPONENT
/*
class Hello extends React.Component {
  render(){
    return <h1>Hi</h1>;
  }
}
*/

// FUNCTION COMPONENTS
// Example 1
// Function Component names are written in TitleCase in React
function SpiderManThree() {
  return `Spider-Man: No Way Home`;
}

// Example 2
// Function Component that returns an h1 HTML element
function SpiderMan() {
  return <h1>Peter Parker</h1>;
}

// Example 3
// JSX (JavaScript Syntax Extension)
// JSX generates React "Elements" with HTML looking code that is written in a JavaScript file
function SpideyFriends() {
  // JSX only allows for a single element (AKA Parent Element) to be returned from a Component
  // return <h1>MJ</h1> <h1>Ned</h1>;
  // A single parent element can be used to create a component with multiple child elements nested inside of it
  // NOTE: Using parenthesis (AKA Smooth Brackets) allows for the returned value to be written multiple lines
  return (
    <div>
      <h1>MJ</h1>
      <h1>Ned</h1>
    </div>
  );
}

// Example 4
function SpideyVillains() {
  // Example of Emmet Abbreviations: div>ol>li*4
  return (
    <div>
      <ol>
        <li>Doctor Otto Octavius</li>
        <li>Venom</li>
        <li>Mysterio</li>
        <li>Green Goblin</li>
      </ol>
    </div>
  );
}

// Example 5
function SelfClosing() {
  // In JSX, self closing tags/elements have to be written in the following format: <tagname />
  return <hr />;
}

// Example 6
function LiveActionSpiderManMovies() {
  // JavaScript can be written like normal before the RETURN keyword in a Function Component
  const tobeyMaguire = 3;
  const andrewGarfield = 2;
  const tomHolland = 3;

  return (
    <section>
      {/* This is a comment */}
      {/* Must use curly brackets (AKA Mustaches) {} to write JavaScript inside the parent JSX element */}
      <h1>Total Live Action SpiderMan Movies: {tobeyMaguire + andrewGarfield + tomHolland}</h1>
    </section>
  );
}

// Example 7
// "App" is the standard name used for the top level component that is passed into the render method
function App() {
  return (
    // Passing multiple components into another component (AKA The App component)
    <div>
      <SpiderManThree />
      <SpiderMan />
      <SpideyFriends />
      <SpideyVillains />
      <SelfClosing />
      <LiveActionSpiderManMovies />
    </div>
  );
}

// RENDER METHOD
// The Render Method renders (AKA Adds/Displays) an element/component to the webpage/document inside of another element (The div with the ID of "root")
// NOTE: Only a single ReactDOM.render method can be used. Also, only a single component can be rendered.
/*
Syntax Example

ReactDOM.render(
  <ComponentName />,
  document.getElementById(`root`)
);
*/

ReactDOM.render(
  // <SpiderManThree />,
  // <SpiderMan />,
  // <SpideyFriends />,
  // <SpideyVillains />,
  // <SelfClosing />,
  // <LiveActionSpiderManMovies />,
  <App />,
  document.getElementById(`root`)
);


// STYLING IN REACT
// When importing a CSS file the ".css" file extension must be included
import './Styles.css';

function Styles() {
  return (
    // To style a React Component, a class name can be added to the top level/parent element. This allows for styles to applied to a specific component.
    <div className='Styles'>
      {/* Inline Styling */}
      {/* Must use double curly brackets {{}} for inline styling in React. Also, style properties must be written in camelCase. Finally, commas are used to separate styles. */}
      <p style={{ color: `cornflowerblue`, fontSize: `75px` }}>Hello from the Styles Component</p>

      {/* This h1 is styled using a descendant selector in the Styles.css file */}
      <h1>Goodbye from the Styles component</h1>

      {/* When creating a class name for an element inside of the top level/parent element it is common practice to reference the class name on the top level/parent element (Ex: Styles-farewell) */}
      <h2 className='Styles-farewell'>Bye</h2>
    </div>
  );
}

export default Styles;
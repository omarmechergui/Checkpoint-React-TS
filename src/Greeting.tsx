// Import React and the FunctionalComponent type
import React from 'react';

// Define an interface for the props
// This specifies that the 'name' prop is a string
interface GreetingProps {
  name: string;
}

// Define the Greeting component as a Functional Component
// The 'GreetingProps' interface is used to type-check the props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Return a div element with the greeting message
  return <div>Hello, {name}!</div>;
};

export default Greeting; // Export the component for use in other files
// Import React and necessary types
import React, { Component } from 'react';

// Define an interface for the props
// In this case, the Counter component does not accept any props, so we use an empty interface
interface CounterProps {}

// Define an interface for the state
// This specifies that the 'count' property in the state is a number
interface CounterState {
  count: number;
}

// Extend the Component class with the defined props and state interfaces
class Counter extends Component<CounterProps, CounterState> {
  // Initialize the state with a count of 0
  state: CounterState = {
    count: 0,
  };

  // Define the increment method to update the state
  increment = (): void => {
    // Use setState to update the count by incrementing it
    this.setState({ count: this.state.count + 1 });
  };

  // Render the component
  render() {
    return (
      <div>
        {/* Display the current count */}
        <p>Count: {this.state.count}</p>

        {/* Button to trigger the increment method */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter; // Export the component for use in other files
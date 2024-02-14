import React, { useState } from 'react';

const CounterComponent = () => {
  
  const [counter, setCounter] = useState(0);

  
  return (
    <div>
      <p>Counter Value: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
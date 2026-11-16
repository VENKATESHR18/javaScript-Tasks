import { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="p-5 text-center">

      <h2 className="text-3xl my-5">
        {count}
      </h2>

      <button
        onClick={increment}
        className="bg-green-500 text-white p-2 mx-2 rounded-xl"
      >
        Increment
      </button>

      <button
        onClick={decrement}
        className="bg-red-500 text-white p-2 mx-2 rounded-xl"
      >
        Decrement
      </button>

      <button
        onClick={reset}
        className="bg-gray-500 text-white p-2 mx-2 rounded-xl"
      >
        Reset
      </button>

    </div>
  );
};

export default Counter;
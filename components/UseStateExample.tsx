"use client";

import { useState } from "react";

function UseStateExample() {
  const [count, setCount] = useState(0);

  function onClick(operation: string) {
    if (operation === "increment") setCount((prev) => prev + 1);
    if (operation === "decrement") setCount((prev) => prev - 1);
    if (operation === "reset") setCount(0);
  }

  return (
    <section className="flex flex-col gap-2">
      <label htmlFor="counter">{count}</label>
      <div className="flex gap-4">
        <button
          className="bg-blue-400 px-4 py-2 text-[#f5f5f5]"
          onClick={() => onClick("increment")}
        >
          Increment
        </button>
        <button
          className="bg-blue-400 px-4 py-2 text-[#f5f5f5]"
          onClick={() => onClick("decrement")}
        >
          Decrement
        </button>
        <button
          className="bg-blue-400 px-4 py-2 text-[#f5f5f5]"
          onClick={() => onClick("reset")}
        >
          Reset
        </button>
      </div>
    </section>
  );
}

export default UseStateExample;

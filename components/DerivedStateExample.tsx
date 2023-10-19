"use client";

import { useState } from "react";

const PRICE_PER_ITEM = 5;

function DerivedStateExample() {
  const [quantity, setQuantity] = useState(1);
  const totalPrice = quantity * PRICE_PER_ITEM;

  function clickHandler() {
    setQuantity((prev) => prev + 1);
  }

  return (
    <section className="flex flex-col">
      <button className="bg-blue-500 px-4 py-2 text-[#f5f5f5]" onClick={clickHandler}>
        Add 1 Item
      </button>
      <label htmlFor="price">Total Price: ${totalPrice}</label>
    </section>
  );
}

export default DerivedStateExample;

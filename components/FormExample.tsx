"use client";

import { useState } from "react";

function FormExample() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function changeHandler(event: { target: { name: string; value: string } }) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <form className="flex flex-col gap-y-2 w-[40%]">
      <input
        type="text"
        onChange={changeHandler}
        name="firstName"
        placeholder="First name"
        className="px-4 py-2"
      />
      <input
        type="text"
        onChange={changeHandler}
        name="lastName"
        placeholder="Last name"
        className="px-4 py-2"
      />
      <input
        type="email"
        onChange={changeHandler}
        name="email"
        placeholder="Email"
        className="px-4 py-2"
      />
      <input
        type="password"
        onChange={changeHandler}
        name="password"
        placeholder="Password"
        className="px-4 py-2"
      />
      <button className="bg-blue-500 px-4 py-2 text-[#f5f5f5]">Submit</button>
    </form>
  );
}

export default FormExample;

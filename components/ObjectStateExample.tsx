"use client";

import { useState } from "react";

function ObjectStateExample() {
  const [user, setUser] = useState({
    name: "",
    role: "Frontend Engineer",
    age: 22,
  });

  function changeHandler(event: { target: { value: string; }; }) {
    setUser({ ...user, name: event.target.value})
  }

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <label htmlFor="user">{user.name}</label>
        <label htmlFor="role">{user.role}</label>
        <label htmlFor="age">{user.age}</label>
      </div>
      <form action="">
        <input type="text" placeholder="Enter name" onChange={changeHandler}/>
      </form>
    </section>
  );
}

export default ObjectStateExample;

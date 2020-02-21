import React, { useState } from "react";

function SmurfsForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
    height: ""
  });

  console.log(userInput);

  const handleChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          name="name"
          placeholder="name"
          onChange={handleChange}
          value={userInput.name}
        />

        <label htmlFor="age"></label>
        <input
          name="age"
          placeholder="age"
          onChange={handleChange}
          value={userInput.age}
        />

        <label htmlFor="height"></label>
        <input
          name="height"
          placeholder="height"
          onChange={handleChange}
          value={userInput.height}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SmurfsForm;

import React, { useState } from "react";

import cls from "./Form.module.css";

const Form = (props) => {
  const [name, setName] = useState("Kheem Chandra");

  const submitHandler = (event) => {
    event.preventDefault();
    let val = event.target.elements["heeh"].value.trim();
    console.log("Your name is ", val);
  };

  const changeNameHandler = (event) => {
    let val = event.target.value.trim();
    setName(val);
  };

  return (
    <form onSubmit={submitHandler} className={cls["form"]}>
      <div>
        <label htmlFor="heeh">Your name:</label>
        <input
          onChange={changeNameHandler}
          defaultValue={name}
          id="heeh"
          type="text"
        />
      </div>
      <button className={cls["form-button"]} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../features/messages/messagesSlice";

const NameEntry = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.messages.name);

  return (
    <form className="form-inline" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="name">Your name:</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => dispatch(setName(e.target.value))}
        placeholder="Enter your name"
        className="form-control"
      />
    </form>
  );
};

export default NameEntry;

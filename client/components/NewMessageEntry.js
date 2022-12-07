import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postMessage } from "../features/messages/messagesSlice";
const NewMessageEntry = (props) => {
  const [content, setContent] = useState("");
  const name = useSelector((state) => state.messages.name);
  const dispatch = useDispatch();
  const onSubmit = (ev) => {
    ev.preventDefault();
    dispatch(postMessage({ content, channelId: props.channelId, name }));
    setContent("");
  };

  return (
    <form id="new-message-form" onSubmit={onSubmit}>
      <div className="input-group input-group-lg">
        <input
          className="form-control"
          type="text"
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
          name="content"
          placeholder="Say something nice..."
        />
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">
            Chat!
          </button>
        </span>
      </div>
    </form>
  );
};

export default NewMessageEntry;

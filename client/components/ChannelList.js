import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// These values are all hardcoded...for now!
// Soon, we'll fetch them from the server!
const RANDOM_CHANNEL = "/channels/1";
const GENERAL_CHANNEL = "/channels/2";
const DOGS_CHANNEL = "/channels/3";
const LUNCH_CHANNEL = "/channels/4";

const ChannelList = () => {
  const messages = useSelector((state) => state.messages.messages);
  return (
    <ul>
      <li>
        <NavLink to={RANDOM_CHANNEL} activeClassName="active">
          <span># really_random</span>
          <span className="badge">
            {messages.filter((message) => message.channelId === 1).length}
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to={GENERAL_CHANNEL} activeClassName="active">
          <span># generally_speaking</span>
          <span className="badge">
            {messages.filter((message) => message.channelId === 2).length}
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to={DOGS_CHANNEL} activeClassName="active">
          <span># dogs_of_fullstack</span>
          <span className="badge">
            {messages.filter((message) => message.channelId === 3).length}
          </span>
        </NavLink>
      </li>
      <li>
        <NavLink to={LUNCH_CHANNEL} activeClassName="active">
          <span># lunch_planning</span>
          <span className="badge">
            {messages.filter((message) => message.channelId === 4).length}
          </span>
        </NavLink>
      </li>
    </ul>
  );
};

export default ChannelList;

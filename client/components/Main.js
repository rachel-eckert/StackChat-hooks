import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import store from "../app/store";
import { gotNewMessageFromServer } from "../features/messages/messagesSlice";
import socket from "../socket";
import MessagesList from "./MessagesList";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Main = () => {
  socket.on("connect", () => {
    console.log("I am now connected to the server!");
    socket.on("new-message", (message) => {
      store.dispatch(gotNewMessageFromServer(message));
    });
  });
  return (
    <div>
      <Sidebar />
      <Navbar />
      <main>
        <Switch>
          <Route path="/channels/:channelId" component={MessagesList} />
          <Redirect to="/channels/1" />
        </Switch>
      </main>
    </div>
  );
};
export default Main;

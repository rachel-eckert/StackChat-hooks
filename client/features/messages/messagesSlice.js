import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import socket from "../../socket";
export const fetchMessages = createAsyncThunk("messages/fetch", async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/messages");
    return response.data;
  } catch (error) {
    return error.message;
  }
});
export const postMessage = createAsyncThunk(
  "messages/post",
  async (message) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/messages",
        message
      );
      const newMessage = data;
      socket.emit("new-message", newMessage);
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
const messagesSlice = createSlice({
  name: "messages",
  initialState: { messages: [], name: "" },
  reducers: {
    gotNewMessageFromServer(state, action) {
      state.messages.push(action.payload);
    },
    setName(state, action) {
      state.name = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.messages = action.payload;
    });
    builder.addCase(postMessage.fulfilled, (state, action) => {
      state.messages.push(action.payload);
    });
  },
});
export const { gotNewMessageFromServer, setName } = messagesSlice.actions;
export default messagesSlice.reducer;

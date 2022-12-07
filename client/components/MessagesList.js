import React, { useEffect } from "react";
import Message from "./Message";
import NewMessageEntry from "./NewMessageEntry";
// import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMessages } from "../features/messages/messagesSlice";
const MessagesList = (props) => {
  // const [messages, setMessages] = useState([]);
  const messages = useSelector((state) => state.messages.messages);
  const dispatch = useDispatch();
  const { channelId } = useParams();
  // useEffect(()=> {
  //   const fetchMessages = async()=> {
  //     try {
  //       const response = await axios.get('/api/messages');
  //       const messages = response.data;
  //       setMessages(messages);
  //     }
  //     catch(ex){
  //       console.log(ex);
  //     }
  //   };
  //   fetchMessages();
  // }, []);
  useEffect(() => {
    dispatch(fetchMessages());
  }, []);
  return (
    <div>
      <ul className="media-list">
        {messages
          .filter(
            (message) => message.channelId === props.match.params.channelId * 1
          )
          .map((message) => (
            <Message message={message} key={message.id} />
          ))}
      </ul>
      <NewMessageEntry channelId={channelId * 1} />
    </div>
  );
};
export default MessagesList;

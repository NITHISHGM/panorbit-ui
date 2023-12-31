import React, { useEffect, useRef, useState } from "react";
import {
  MessageFilled,
  CaretUpFilled,
  CaretDownFilled,
} from "@ant-design/icons";
import { Avatar, List, Badge } from "antd";
import { useSelector } from "react-redux";

const ChatBot = () => {
  const chatContainerRef = useRef(null);
  const [botToggle, setBotToggle] = useState(false);
  const { users } = useSelector((state) => state.allUsers.data); // Assuming the correct structure in Redux store

  useEffect(() => {
    if (botToggle && chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [botToggle, users]);

  return (
    <div className="bot-main-cls">
      <div className="chatbot-container">
        {botToggle ? (
          <>
            <div className="chatbot-overlay" ref={chatContainerRef}>
              <div className="bot-cls" onClick={() => setBotToggle(!botToggle)}>
                <span className="float-left">
                  <MessageFilled /> <span className="chat-test">Chats</span>
                </span>
                <span className="float-right">
                  {!botToggle ? <CaretUpFilled /> : <CaretDownFilled />}
                </span>
              </div>
              <div className="chatbot-messages">
                <List
                  dataSource={users}
                  style={{ maxHeight: "250px", overflowY: "scroll" }}
                  className="bot-list"
                  renderItem={(item) => (
                    <List.Item
                      className="bot-list-message cursor-pointer"
                      key={item.id}
                    >
                      <List.Item.Meta
                        avatar={
                          <Avatar size="default" src={item.profilepicture} />
                        }
                      />
                      <div className="bot-usersList"> {item.name}</div>
                      {Number(item.id) % 2 === 0 ? (
                        <>
                          {" "}
                          <Badge status="processing" />
                        </>
                      ) : (
                        <>
                          {" "}
                          <Badge status="default" />
                        </>
                      )}
                    </List.Item>
                  )}
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="bot-cls" onClick={() => setBotToggle(!botToggle)}>
              <span className="float-left">
                <MessageFilled /> <span className="chat-test">Chats</span>
              </span>
              <span className="float-right">
                {!botToggle ? <CaretUpFilled /> : <CaretDownFilled />}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ChatBot;

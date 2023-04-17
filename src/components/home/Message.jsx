import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

export const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const messageRef = useRef();

  useEffect(() => {
    messageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div ref={messageRef}>
      <div
        className={
          message.senderId === currentUser.uid ? "message owner" : "message"
        }
      >
        <div className="messageInfo">
          <img
            src={
              message.senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            }
            alt=""
          />
          <span>Just Now</span>
        </div>
        <div className="messageContent">
          {message.text && <p>{message.text}</p>}
          {message.img && <img src={message.img} alt="" />}
        </div>
      </div>
    </div>
  );
};

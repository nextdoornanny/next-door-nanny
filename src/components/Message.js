import React from "react";
import { auth } from "../auth/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
    const [user] = useAuthState(auth);
    console.log(message.avatar);
    return (
        <div
            className={`message ${message.uid === user.uid ? 'sent' : 'received'
                }`}>
            <img
                className="chat-bubble__left"
                src={message.avatar}
                alt="user avatar"
            />
            <div className="chat-bubble__right">
                <p className="user-name">{message.name}</p>
                <p className="user-message">{message.text}</p>
            </div>
        </div>
    );
};

export default Message;
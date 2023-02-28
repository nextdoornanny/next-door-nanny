import React, { useState, useEffect, useContext } from 'react';
import { ChatContext } from '../../contexts/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../auth/firebase';
import styled from '@emotion/styled';
import Message from './Message';

const StyledMessages = styled.div`
padding: 10px;
height: calc(100% - 130px) !important;
overflow: scroll;
`

const Messages = () => {
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
            doc.exists() && setMessages(doc.data().messages);
        });

        return () => {
            unSub();
        };
    }, [data.chatId]);

    console.log(messages)

    return (
        <StyledMessages>
            {messages.map((m) => (
                <Message message={m} key={m.id} />
            ))}
        </StyledMessages>
    );
};

export default Messages;
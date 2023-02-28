import React, { useEffect, useState, useRef } from 'react'
import styled from '@emotion/styled';
import Message from './Message';
import SendMessage from './SendMessage';
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
    QuerySnapshot,
} from "firebase/firestore";
import { db } from "../auth/firebase";
import Sidebar from './messaging/Sidebar';
import Chat from './messaging/Chat';
import { Flex } from './StyledComponents';

const MessageHome = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

const MessageContainer = styled.div`
    height: 90%;
    overflow: hidden;
    display: flex;
    overflow: hidden;
    width: 97%;
    border: 1px solid grey;
`

const Messages = () => {
    const [messages, setMessages] = useState([])
    const scroll = useRef();
    useEffect(() => {
        const q = query(collection(db, "messages"),
            orderBy("createdAt"))
        console.log(q, "q")
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = []
            QuerySnapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessages(messages)
        })
        return () => unsubscribe
    }, [])
    return (
        <MessageHome>
            <MessageContainer>
                <Sidebar />
                <Chat />
            </MessageContainer>
        </MessageHome>

    )
}

export default Messages
import React, { useState, useEffect, useContext } from 'react';
import styled from '@emotion/styled';
import { UserChat, UserChatInfo, PortraitImage } from "./Search"
import Portrait from "../../img/portrait.jpeg"
import { useUserAuth } from '../../contexts/UserAuthContext';
import { ChatContext } from '../../contexts/ChatContext';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../auth/firebase';
const StyledChats = styled.div`

`
const Chats = () => {
    const [chats, setChats] = useState([]);
    const { dispatch } = useContext(ChatContext);
    const { user } = useUserAuth()
    useEffect(() => {
        const getChats = () => {
            const unsubscribe = onSnapshot(doc(db, "userChats", user.uid), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsubscribe();
            };
        };

        user.uid && getChats();
    }, [user.uid]);
    console.log(chats, "Chats")
    const handleSelect = (u) => {
        dispatch({ type: "CHANGE_USER", payload: u });
    };
    return (
        <StyledChats>
            {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
                <UserChat key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
                    <PortraitImage src={chat[1].userInfo.photoURL} alt="" />
                    <UserChatInfo>
                        <span>{chat[1].userInfo.displayName}</span>
                        <p>{chat[1].lastMessage?.text}</p>
                    </UserChatInfo>
                </UserChat>
            ))}
        </StyledChats >
    )
}

export default Chats;
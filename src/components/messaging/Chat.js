import React, { useContext } from 'react';
import { ChatContext } from '../../contexts/ChatContext';
import styled from '@emotion/styled';
import Cam from '../../img/icons/cam.png'
import More from '../../img/icons/more.png'
import Add from '../../img/icons/add.png'
import Messages from './Messages';
import Input from './Input';
import { PortraitImage } from './Search';

const StyledChat = styled.div`
    flex: 2;
`
const ChatInfo = styled.div`
     height: 50px;
     background-color: #5673b3;
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 10px;
     color: white;
`
const ChatIcons = styled.div`
     display: flex;
     gap: 10px;
     & > img {
        height: 24px;
        cursor: pointer; 
     }
`
const Chat = () => {
    const { data } = useContext(ChatContext);
    console.log(data, "Data")
    return (
        <StyledChat>
            <ChatInfo>
                <PortraitImage style={{ margin: "5px 0" }} src={data.user?.photoURL} alt="" />
                <span>{data.user?.displayName}</span>
                <ChatIcons>
                    <img src={Cam} alt="" />
                    <img src={More} alt="" />
                    <img src={Add} alt="" />
                </ChatIcons>
            </ChatInfo>
            <Messages />
            <Input />
        </StyledChat>
    );
}

export default Chat;
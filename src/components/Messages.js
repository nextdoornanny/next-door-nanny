import React from 'react'
import styled from '@emotion/styled';
import Sidebar from './messaging/Sidebar';
import Chat from './messaging/Chat';

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
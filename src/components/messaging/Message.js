import React, { useContext, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { useUserAuth } from '../../contexts/UserAuthContext'
import { ChatContext } from '../../contexts/ChatContext';
import ReactTimeAgo from 'react-time-ago'
import moment from 'moment';

const StyledMessage = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    flex-direction: ${props => props.isOwnMessage && "row-reverse"}
`
const StyledMessageInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
`
const StyledMessageContent = styled.div`
max-width: 80%;
display: flex;
flex-direction: column;
gap: 10px;
& > p {
    background-color: ${props => props.isOwnMessage ? "#e4e6ea" : "#5673b4"};
    color: ${props => props.isOwnMessage ? "black" : "white"};
    padding: 10px 20px;
    border-radius: 0px 10px 10px 10px;
}
& > img {
    width: 50%;
}
& > span {
    font-size: 12px;
    text-align: ${props => props.isOwnMessage ? "right" : "left"};

}
&:owner{
    flex-direction: row-reverse;
}
`


const Message = ({ message }) => {

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);
    const { data } = useContext(ChatContext)
    const { user } = useUserAuth()
    console.log(message, "mes")

    // const imageToDisplay = () => {
    //     if (message.senderId === user.uid) {
    //         return user.photoURL
    //     }
    //     return EmptyProfileImage
    // }
    const isOwnMessage = message.senderId === user.uid
    const today = new Date()
    const now = today.toLocaleString().split(",")[0];
    console.log(now)
    const todayOrOlder = moment(message.date.toDate().getTime()).format("DD/MM/YYYY") === now ? "Today" : moment(message.date.toDate().getTime()).format("DD/MM/YYYY")
    console.log(todayOrOlder)
    console.log(message.date.toDate(), "message.date.toDate()")
    return (
        <StyledMessage ref={ref} isOwnMessage={isOwnMessage}>
            <StyledMessageInfo>
                <img src={message.senderId === user.uid
                    ? user.photoURL
                    : data.user.photoURL} alt="" />
            </StyledMessageInfo>
            <StyledMessageContent isOwnMessage={isOwnMessage}>
                <p style={{ margin: "0" }}>{message.text}</p>
                <span >{<ReactTimeAgo date={moment(message.date.toDate().getTime())} locale="en-US" />}</span>
                {message.image && <img src={message.image} alt="" />}
            </StyledMessageContent>
        </StyledMessage>
    );
}

export default Message;
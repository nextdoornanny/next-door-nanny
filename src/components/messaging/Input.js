import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { v4 as uuid } from "uuid";
import {
    arrayUnion,
    doc,
    serverTimestamp,
    Timestamp,
    updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../auth/firebase";
import Img from '../../img/icons/img.png'
import Attach from '../../img/icons/attach.png'
import { useUserAuth } from '../../contexts/UserAuthContext';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { ChatContext } from '../../contexts/ChatContext';


const StyledInputContainer = styled.div`
    border: none;
    height: 50px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
`

const StyledInput = styled.input`
    border: none;
    outline: none;
    width: 100%;
`

const SendButton = styled.button`
    border: none;
    padding: 10px 15px;
    color: grey;
    background-color: #eaf3ff;
`

const StyledSend = styled.div`
    display: flex;
    justify-content: center;
    & img {
        height: 24px;
        cursor: pointer;
    }

`
const Input = (props) => {

    const [text, setText] = useState("");
    const [img, setImg] = useState(null);

    const { user } = useUserAuth()
    const { data } = useContext(ChatContext)

    const handleChange = (e) => {
        if (e.key === "Enter") {
            handleSend()
        }
    }

    const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {
                    //TODO:Handle Error
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: uuid(),
                                text,
                                senderId: user.uid,
                                date: Timestamp.now(),
                                img: downloadURL,
                            }),
                        });
                    });
                }
            );
        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: user.uid,
                    date: Timestamp.now(),
                }),
            });
        }

        await updateDoc(doc(db, "userChats", user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setText("");
        setImg(null);
    };
    return (
        <StyledInputContainer>
            <StyledInput type="text"
                placeholder="Type something..."
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleChange}
                value={text} />
            <StyledSend>
                <img src={Img} alt="" />
                <input type="file" style={{ display: "none" }} id="file" />
                <label htmlFor='file'>
                    <img src={Attach} alt="" />
                </label>
                <SendButton onClick={handleSend}>Send</SendButton>
            </StyledSend>
        </StyledInputContainer>
    );
}

export default Input;
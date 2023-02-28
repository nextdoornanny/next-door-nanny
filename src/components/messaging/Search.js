import React, { useState } from 'react';
import styled from "@emotion/styled"
import EmptyProfileImage from "../../img/icons/user1.png"
import { collection, query, where, getDocs, setDoc, getDoc, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '../../auth/firebase';
import { useUserAuth } from '../../contexts/UserAuthContext';

export const PortraitImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`

const SearchMessages = styled.div`
    background-color: #5673b3;
    width: 100%;
    height: 50px;
    color: white;
    
`
const StyledInput = styled.input`
    border: none;
    background-color: #5673b3;
    color: white;
    &:focus {
        color: white !important:
    }
`

export const UserChat = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    &:hover{
        background-color: #eaf3ff;
    }
`
export const UserChatInfo = styled.div`
  & > p {
        font-size: 11px;
    }
`
const Search = (props) => {
    const [username, setUsername] = useState("")
    const [person, setPerson] = useState(null)
    const [error, setError] = useState("")
    const { user } = useUserAuth()
    const handleSearch = async () => {
        const q = query(collection(db, "users"), where("displayName", "==", username))
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setPerson(doc.data());
            });
        } catch (err) {
            setError(true);
        }
    }

    // const handleKey = e => {
    //     setUsername(e.target.value);
    //     handleSearch()
    // }
    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    };

    const handleSelect = async () => {
        //check whether the group(chats in firestore) exists, if not create
        const combinedId =
            user.uid > person.uid
                ? user.uid + person.uid
                : person.uid + user.uid;
        try {
            const res = await getDoc(doc(db, "chats", combinedId));

            if (!res.exists()) {
                //create a chat in chats collection
                await setDoc(doc(db, "chats", combinedId), { messages: [] });
                //create user chats
                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: person.uid,
                        displayName: person.displayName || person.email,
                        photoURL: person.photoURL || EmptyProfileImage,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });

                await updateDoc(doc(db, "userChats", person.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName || person.email,
                        photoURL: user.photoURL || EmptyProfileImage,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });
            }
        } catch (err) {
            console.log(err, "err")
        }

        setPerson(null);
        setUsername("")
    };

    return (
        <SearchMessages>
            <StyledInput className="searchInput" type="text" placeholder='Search messages' onKeyDown={handleKey} onChange={(e) => setUsername(e.target.value)} value={username} />
            {error && <span>User not found</span>}
            {person && <UserChat onClick={handleSelect}>
                <PortraitImage src={person.photoURL} alt="" />
                <UserChatInfo>
                    <span>{person.displayName}</span>
                    <p>Hello</p>
                </UserChatInfo>
            </UserChat>}
        </SearchMessages>
    );
}

export default Search;
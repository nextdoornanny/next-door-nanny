import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { setDoc, doc, collection, serverTimestamp } from "firebase/firestore";
import EmptyProfileImage from "../img/icons/user1.png"
import { useNavigate, Link } from "react-router-dom";

import { auth, db } from "../auth/firebase";

const userAuthContext = createContext();
console.log(db, "db")
export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signUp = async (email, password) => {
        await createUserWithEmailAndPassword(auth, email, password).then((res) => {
            const uid = res.user.uid;
            console.log(res, "res")
            const data = {
                uid,
                email: res.user.email,
                displayName: res.user.displayName || res.user.email,
                image: /*res.user.photoURL || */EmptyProfileImage
            };
            //create user on firestore
            setDoc(doc(db, "users", res.user.uid), data);

            //create empty user chats on firestore
            setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");

        })
    }
    function logOut() {
        return signOut(auth);
    }
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleAuthProvider).then((res) => {
            console.log(res, "Res goodle")
            const uid = res.user.uid;
            const data = {
                uid,
                email: res.user.email,
                displayName: res.user.displayName,
                image: res.user.photoURL
            };
            //create user on firestore
            setDoc(doc(db, "users", res.user.uid), data);

            //create empty user chats on firestore
            setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider
            value={{ user, logIn, signUp, logOut, googleSignIn }}
        >
            {children}
        </userAuthContext.Provider>
    );
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
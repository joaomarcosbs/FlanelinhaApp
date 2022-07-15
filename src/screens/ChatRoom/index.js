import React, {useState, useEffect, useCallback, useLayoutEffect} from "react";
import { View, Text } from "react-native";
import { collection, addDoc, orderBy, query, snapshot, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";
import styles from "./styles"
import { useNavigation } from "@react-navigation/native";
import { useUserContext } from "../../context/userContext";
//import { updateCurrentUser } from "firebase/auth";

const ChatRoom = () => {

    const [messages, setMessages] = useState([]);
    const navigation = useNavigation();
    const { user } = useUserContext();

    useLayoutEffect(() => {

        const messagesCollectionRef = collection(db, 'chats');
        const q = query(messagesCollectionRef, orderBy('createdAt', 'desc'));

        const unsub = onSnapshot(q, snapshot => {
            console.log('aaoaoaoaoaoao');
            setMessages(snapshot.docs.map(doc => ({
                _id: doc.id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user
            })))
        });
        return unsub;
        console.log(setMessages);
    }, []);
    

    return (
        <View style = {styles.container}>
            
        </View>
    );

}

export default ChatRoom;
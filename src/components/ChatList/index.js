import React from "react";
import { View, Text, ScrollView } from "react-native";
import ChatRow from "../ChatRow";
import styles from './styles';

const ChatList = () => {
    return(
        <View style = {styles.container}>
            <ScrollView>
                <ChatRow/>
                <ChatRow/>
            </ScrollView>
        </View>
    )
}

export default ChatList;
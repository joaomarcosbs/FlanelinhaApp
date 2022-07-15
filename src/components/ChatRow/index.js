import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const ChatRow = () => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.touchableArea}>
                <Image 
                    style = {styles.picture} 
                    source = {{uri: 'https://dummyimage.com/600x400/000/fff.jpg'}}
                />
                <View style = {styles.textContainer}> 
                    <Text style = {styles.userName}>João Marcos</Text>
                    <Text style = {styles.lastMessege}>Vai querer a vaga ou não?</Text>
                </View>

            </TouchableOpacity>
        </View>
    );
}

export default ChatRow;
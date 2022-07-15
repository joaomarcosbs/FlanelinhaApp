import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import ChatRow from "../../components/ChatRow";
import styles from "./styles"
import { useUserContext } from "../../context/userContext";



const ChatFeed = () => {

    const {user} = useUserContext();
    const navigation = useNavigation();

   /* useEffect(() => {
        const connectUser = async () => {
          //connecting user to stream
          await client.connectUser({
            id: user?.uid,
            name: user?.displayName
          }, 
          client.devToken(user?.uid),
          );
    
          //creating a channel
          const channel = client.channel('messaging', '321', {name: user?.displayName,});
          await channel.watch();
    
          console.log('VRAU CONECTOU');
        };
    
        connectUser();
        
        return () => client.disconnectUser();
      }, []);*/

    return(
         
            <View style = {styles.container}>
                <ScrollView>
                    <TouchableOpacity onPress = {() => navigation.navigate('ChatRoom')}>
                        <ChatRow/>
                    </TouchableOpacity>
                    
                    
                    <ChatRow/>
                </ScrollView>
            </View>
        
    )
}

export default ChatFeed;